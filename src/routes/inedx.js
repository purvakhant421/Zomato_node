const express = require("express");
const userRoute = require("./user.route");
const categoryRoute = require("./category.route");
const productRoute = require("./product.route");
const contactusRoute = require("./contactus.route");
const bannerRoute = require("./banner.route");
const blogRoute = require("./blog.route");



const router = express.Router();

router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use("/product", productRoute);
router.use("/contactus", contactusRoute);
router.use("/banner", bannerRoute);
router.use("/blog", blogRoute);


module.exports = router;