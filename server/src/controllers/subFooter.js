const SubFooterData = require("../models/subFooter.schema");

exports.create = async (req, res) => {
  const { parent, title } = req.body;

  const record = await SubFooterData.create({
    parent,
    title,
  });

  res.send(record);
};

exports.find = async (req, res) => {
  const records = await SubFooterData.find();

  res.send(records);
};
