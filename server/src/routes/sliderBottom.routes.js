const controller = require("../controllers/sliderBottom");
const express = require("express");

const apiRoutes = express.Router();

apiRoutes.route("/").get(controller.find);
apiRoutes.route("/").post(controller.create);

module.exports = apiRoutes;
