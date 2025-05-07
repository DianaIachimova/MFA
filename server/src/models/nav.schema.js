const mongoose = require("mongoose");
const SubNavData = require("./subNav.schema");

const schema = new mongoose.Schema({
  href: String,
  key: String,
  items: [
    {
      type: mongoose.Schema.Types.ObjectID,
      ref: SubNavData,
    },
  ],
});

const NavData = mongoose.model("NavData", schema);

module.exports = NavData;
