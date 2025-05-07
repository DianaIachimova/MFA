const Product = require("../models/products.schema");

exports.create = async (req, res) => {
  const { key, parent, name, description, quantity, price, urlImg, imgLarge } =
    req.body;

  const record = await Product.create({
    key,
    parent,
    name,
    description,
    quantity,
    price,
    urlImg,
    imgLarge,
  });

  res.send(record);
};

exports.getPreviewProduct = async (req, res) => {
  const key = req.params.key;

  const prevProduct = await Product.findOne({ key });

  if (prevProduct) {
    res.send(prevProduct);
  } else {
    res.status(404).send("PrevProduct not found");
  }
};

exports.find = async (req, res) => {
  const records = await Product.find();

  res.send(records);
};
