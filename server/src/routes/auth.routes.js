const { verifySignUp } = require("../middlewares");
const { authJwt } = require("../middlewares");
const controller = require("../controllers/auth");
const express = require("express");

const apiRoutes = express.Router();

apiRoutes
  .route("/signup")
  .post([verifySignUp.checkDuplicateUsernameOrEmail], controller.signup);

apiRoutes.route("/signin").post(controller.signin);

// 2FA routes
apiRoutes.route("/2fa/setup").post(controller.setup2FA);
apiRoutes.route("/2fa/verify").post(controller.verify2FA);
apiRoutes.route("/2fa/disable").post([authJwt.verifyToken], controller.disable2FA);

// apiRoutes.route("/codeverify").post([authJwt.verifyToken], controller.codeverify);

module.exports = apiRoutes;
