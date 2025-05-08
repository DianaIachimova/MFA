const { verifySignUp } = require("../middlewares");
const { authJwt } = require("../middlewares");
const controller = require("../controllers/auth");
const express = require("express");

const apiRoutes = express.Router();

apiRoutes
  .route("/signup")
  .post([verifySignUp.checkDuplicateUsernameOrEmail], controller.signup);

apiRoutes.route("/signin").post(controller.signin);

apiRoutes.route("/codeverify").post([authJwt.verifyToken], controller.codeverify);


module.exports = apiRoutes;
