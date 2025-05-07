const mongoose = require("mongoose");
const Product = require("./products.schema");
const User = require("./user.schema");

const schema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Product,
      },
      quantity: Number,
    },
  ],
});

const Cart = mongoose.model("CartData", schema);

module.exports = Cart;
