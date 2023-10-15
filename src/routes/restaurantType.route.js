const express = require("express");
const { restaurantTypeValidation } = require("../validations");
const { restaurantTypeController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create restaurantType */
router.post(
  "/create-restaurantType",
  validate(restaurantTypeValidation.createRestaurantType),
  restaurantTypeController.createRestaurantType
);

/** restaurantType list */
router.get(
  "/list",
  restaurantTypeController.getRestaurantTypeList
)

/** restaurantType delete */
router.delete(
  "/delete/:restaurantTypeId",
  restaurantTypeController.deleteRestaurantType
)

/** restaurantType update */
router.put(
  "/update-restaurantType/:restaurantTypeId",
  restaurantTypeController.updateRestaurantType
)

module.exports = router;