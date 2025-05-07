const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  key: String,
  parent: String,
  name: String,
  description: String,
  quantity: Number,
  price: String,
  urlImg: String,
  imgLarge: String,
});

const Product = mongoose.model("Product", schema);

module.exports = Product;
