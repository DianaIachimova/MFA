const subNavData = require("../models/subNav.schema");

exports.create = async (req, res) => {
  const { parent, title } = req.body;

  const record = await subNavData.create({
    parent,
    title,
  });

  res.send(record);
};

exports.find = async (req, res) => {
  const records = await subNavData.find();

  res.send(records);
};
