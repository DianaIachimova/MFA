const express = require("express");
const contacts = require("./contact.routes");
const partners = require("./partner.routes");
const nav = require("./nav.routes");
const subNav = require("./subNav.routes");
const category = require("./category.routes");
const products = require("./products.routes");
const footer = require("./footer.routes");
const subFooter = require("./subFooter.routes");
const sliderTop = require("./sliderTop.routes");
const sliderBottom = require("./sliderBottom.routes");
const previewProduct = require("./previewProduct.routes");
const news = require("./news.routes");
const auth = require("./auth.routes");
const user = require("./user.routes");
const cart = require("./cart.routes");

const router = express.Router();

router.use("/contacts", contacts);
router.use("/partners", partners);
router.use("/nav", nav);
router.use("/subNav", subNav);
router.use("/category", category);
router.use("/products", products);
router.use("/sliderTop", sliderTop);
router.use("/sliderBottom", sliderBottom);
router.use("/previewProduct", previewProduct);
router.use("/news", news);
router.use("/footer", footer);
router.use("/subFooter", subFooter);
router.use("/auth", auth);
router.use("/users", user);
router.use("/cart", cart);

module.exports = router;
