const controller = require("../controllers/category");
const express = require("express");

const apiRoutes = express.Router();

apiRoutes.route("/").get(controller.find);
apiRoutes.route("/").post(controller.create);
apiRoutes.route("/:key").get(controller.getProduct);

module.exports = apiRoutes;
