const previewProductData = require("../models/previewProduct.schema");

exports.create = async (req, res) => {
  const { name, description, quantity, price, imgUrl } = req.body;

  const record = await previewProductData.create({
    name,
    description,
    quantity,
    price,
    imgUrl,
  });

  res.send(record);
};

exports.find = async (req, res) => {
  const records = await previewProductData.find();

  res.send(records);
};
