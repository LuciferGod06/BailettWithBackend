const mongoose = require('mongoose');

const ProductModel = mongoose.model('product',mongoose.Schema({
    id: Number,
    title: String,
    type: String,
    price: Number,
    description: String,
    image: String
}))

module.exports= {ProductModel};