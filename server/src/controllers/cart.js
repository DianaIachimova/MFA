const Cart = require("../models/cart.schema");

exports.add = async (req, res) => {
  const { productId, quantity } = req.body;

  console.warn("add", productId, quantity)

  const cart = await Cart.findOne({ user: req.userId });

  if (cart) {
    const item = cart.items.find(
      (item) => item.product?.toString() === productId
    );

    if (item) {
      item.quantity = quantity;
    } else {
      cart.items.push({ product: productId, quantity });
    }

    await cart.save();
  } else {
    const newCart = new Cart({
      user: req.userId,
      items: [{ product: productId, quantity }],
    });

    await newCart.save();
  }

  const { items } = await Cart.findOne({ user: req.userId }).populate(
    "items.product"
  );

  res.send(items);
};

exports.getProducts = async (req, res) => {
  console.warn("get", req.userId)
  const cart = await Cart.findOne({ user: req.userId }).populate(
    "items.product"
  );

  if (!cart) {
    return res.status(404).send("Cart not found");
  }

  res.send(cart.items);
};

exports.deleteProduct = async (req, res) => {
  const { productId } = req.body;

  const cart = await Cart.findOne({ user: req.userId });

  if (!cart) {
    return res.status(404).send("Cart not found");
  }

  const item = cart.items.find(
    (item) => item.product?.toString() === productId
  );

  if (!item) {
    return res.status(404).send("Item not found");
  }

  cart.items = cart.items.filter(
    (item) => item.product?.toString() !== productId
  );

  await cart.save();

  const { items } = await Cart.findOne({ user: req.userId }).populate(
    "items.product"
  );

  res.send(items);
};
