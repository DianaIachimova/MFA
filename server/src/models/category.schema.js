const mongoose = require("mongoose");
const Product = require("./products.schema");

const schema = new mongoose.Schema({
  key: String,
  title: String,
  products: [
    {
      type: mongoose.Schema.Types.ObjectID,
      ref: Product,
    },
  ],
});

const CategoryData = mongoose.model("CategoryData", schema);

module.exports = CategoryData;
