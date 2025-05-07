const CategoryData = require("../models/category.schema");

exports.create = async (req, res) => {
  const { key, title } = req.body;

  const record = await CategoryData.create({
    key,
    title,
  });
  res.send(record);
};

exports.getProduct = async (req, res) => {
  const key = req.params.key;

  const category = await CategoryData.findOne({ key }).populate("products");

  if (category) {
    res.send(category);
  } else {
    res.status(404).send("Category not found");
  }
};

exports.find = async (req, res) => {
  const records = await CategoryData.find().populate("products");

  res.send(records);
};
