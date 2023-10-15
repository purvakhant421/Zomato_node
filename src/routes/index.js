const express = require("express");
const userRoute = require("./user.route");
const categoryRoute = require("./category.route");
const tokenRoute = require("./token.route");
const productRoute = require("./product.route");
const contactusRoute = require("./contactus.route");
const bannerRoute = require("./banner.route");
const blogRoute = require("./blog.route");
const cityRoute = require("./city.route");
const countryRoute = require("./country.route");
const stateRoute = require("./state.route.js");
const foodRoute = require("./food.route");
const restaurantRoute = require("./restaurant.route.js");
const restaurantTypeRoute = require("./restaurantType.route");
const cartRoute = require("./cart.route.js");
const menuRoute = require("./menu.route.js");
const reviewRoute = require("./review.route.js");
const favoriteRoute = require("./favorite.route.js");
const orderRoute = require("./order.route.js");
const ownerRoute = require("./owner.route.js");
const adminRoute = require("./admin.route.js");




const router = express.Router();

router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use("/token", tokenRoute);
router.use("/product", productRoute);
router.use("/contactus", contactusRoute);
router.use("/banner", bannerRoute);
router.use("/blog", blogRoute);
router.use("/city", cityRoute);
router.use("/country", countryRoute);
router.use("/state", stateRoute);
router.use("/food", foodRoute);
router.use("/restaurant", restaurantRoute);
router.use("/restaurantType", restaurantTypeRoute);
router.use("/cart", cartRoute);
router.use("/menu", menuRoute);
router.use("/review", reviewRoute);
router.use("/favorite", favoriteRoute);
router.use("/order", orderRoute);
router.use("/owner", ownerRoute);
router.use("/admin", adminRoute);






module.exports = router;