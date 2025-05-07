const NavData = require("../models/nav.schema");

exports.create = async (req, res) => {
  const { href, key } = req.body;

  const record = await NavData.create({
    href,
    key,
  });

  res.send(record);
};

exports.find = async (req, res) => {
  const records = await NavData.find().populate("items");

  res.send(records);
};
