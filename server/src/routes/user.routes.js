const { authJwt } = require("../middlewares");
const controller = require("../controllers/user");
const express = require("express");

const apiRoutes = express.Router();

apiRoutes.route("/all").get(controller.allAccess);
apiRoutes.route("/me").get([authJwt.verifyToken], controller.userBoard);

apiRoutes
  .route("/mod")
  .get([authJwt.verifyToken, authJwt.isModerator], controller.moderatorBoard);

apiRoutes
  .route("/admin")
  .get([authJwt.verifyToken, authJwt.isAdmin], controller.adminBoard);

module.exports = apiRoutes;
