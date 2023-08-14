const mongoose = require('mongoose');

const UserModel = mongoose.model('user',mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String
}))

module.exports= {UserModel};