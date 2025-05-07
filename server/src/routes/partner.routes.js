const controller = require("../controllers/partners");
const express = require("express");

const apiRoutes = express.Router();

apiRoutes.route("/").get(controller.find);
apiRoutes.route("/").post(controller.create);

module.exports = apiRoutes;
