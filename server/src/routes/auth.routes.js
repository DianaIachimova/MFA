const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth");
const express = require("express");

const apiRoutes = express.Router();

apiRoutes
  .route("/signup")
  .post([verifySignUp.checkDuplicateUsernameOrEmail], controller.signup);

apiRoutes.route("/signin").post(controller.signin);

module.exports = apiRoutes;
