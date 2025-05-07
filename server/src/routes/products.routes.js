const controller = require("../controllers/products");
const express = require("express");

const apiRoutes = express.Router();

apiRoutes.route("/").get(controller.find);
apiRoutes.route("/").post(controller.create);
apiRoutes.route("/:key").get(controller.getPreviewProduct);
module.exports = apiRoutes;
