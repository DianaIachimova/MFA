const mongoose = require("mongoose");
const SubFooterData = require("./subFooter.schema");

const schema = new mongoose.Schema({
  key: String,
  href: String,
  items: [
    {
      type: mongoose.Schema.Types.ObjectID,
      ref: SubFooterData,
    },
  ],
});

const FooterData = mongoose.model("FooterData", schema);

module.exports = FooterData;
