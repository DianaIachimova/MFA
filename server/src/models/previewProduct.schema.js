const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  description: String,
  quantity: String,
  price: String,
  imgUrl: String,
});

const previewProductData = mongoose.model("previewProductData", schema);

module.exports = previewProductData;
