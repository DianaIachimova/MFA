const FooterData = require("../models/footer.schema");

exports.create = async (req, res) => {
  const { key, href } = req.body;

  const record = await FooterData.create({
    key,
    href,
  });

  res.send(record);
};

exports.find = async (req, res) => {
  const records = await FooterData.find().populate("items");

  res.send(records);
};
