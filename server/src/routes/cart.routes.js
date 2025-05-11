const controller = require("../controllers/cart");
const { authJwt } = require("../middlewares");
const express = require("express");

const apiRoutes = express.Router();

apiRoutes.route("/").post([authJwt.verifyToken], controller.add);
apiRoutes.route("/").get([authJwt.verifyToken], controller.getProducts);
apiRoutes.route("/:productId").delete([authJwt.verifyToken], controller.deleteProduct);

module.exports = apiRoutes;
