const express = require('express');

const connection = require('./config/db');
const { UserModel } = require('./Model/User.model');

const port = 8080;


var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { authentication } = require('./Middleware/authentication');
var cors = require('cors');
const { ProductModel } = require('./Model/Product.model');

const app = express();

app.use(cors({
  origin: "*"
}))

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to my mongodb")
})

//   SignUp Method

app.post("/signup", async (req, res) => {
  const { firstName,lastName, email, password } = req.body
  const hash = bcrypt.hashSync(password, 3);
  try {
    const signUser = new UserModel({
      firstName,
      lastName,
      email,
      password: hash
    })

    await signUser.save()
    res.status(200).json({ msg: "Successfully signed up" })
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: "Error signing" })
  }
})


// Login Method

app.post("/login", async (req, res) => {
  const { email, password } = req.body

  const user = await UserModel.findOne({ email })
  if (user) {
    // console.log(user._id)
    const hashPassword = user.password
    bcrypt.compare(password, hashPassword, function (err, result) {
      if (result) {
        var token = jwt.sign({ user_id: user._id }, 'BailettibyGourav');
        res.json({ token: token });
        console.log(token)
      }
      if (err) {
        res.status(200).json({ msg: "error" })
        // console.log(err)
      }
    });
  }
})


app.get("/product",authentication, async (req, res) => {
  const { type, sortby, page, limit, order } = req.query;
  console.log(sortby, order);
  let pageno = parseInt(page);
  let limitperpage = parseInt(limit);
  let skip = (pageno - 1) * limitperpage;

  try {


    const filter = {}
    if (type) filter.type = { $regex: type, $options: "i" };
    let query = ProductModel.find(filter);

    if (sortby && order) {
      let ordering = order === "asc" ? 1 : -1;
      let sortObj = {};
      sortObj[sortby] = ordering;
      query = query.sort(sortObj);
    }

    if (limitperpage) {
      query = query.skip(skip).limit(limitperpage);
    }

    const products = await query.exec(); // Execute the query

    const total = await ProductModel.countDocuments(); // Use countDocuments() instead of deprecated count()

    res.json({ total, products });
  } catch (error) {
    res.json({ error: error });
  }
});

app.listen((port), async () => {
  console.log(`working at ${port} `);

  try {
    await connection;
    console.log('mongoose db is working fine')
  } catch (error) {
    console.log(error)
  }

})