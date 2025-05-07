const Partner = require("../models/partner.schema");

exports.create = async (req, res) => {
  const { imgUrl, redirectUrl, width, height, alt } = req.body;

  const record = await Partner.create({
    imgUrl,
    redirectUrl,
    width,
    height,
    alt,
  });

  res.send(record);
};

exports.find = async (req, res) => {
  const records = await Partner.find();

  res.send(records);
};
