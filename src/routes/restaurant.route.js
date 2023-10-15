const express = require("express");
const { restaurantValidation } = require("../validations");
const { restaurantController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create restaurant */
router.post(
  "/create-restaurant",
  validate(restaurantValidation.createRestaurant),
  restaurantController.createRestaurant
);

/**restaurant list */
router.get(
  "/list",
  restaurantController.getRestaurantList
)

/** restaurant delete */
router.delete(
  "/delete/:restaurantId",
  restaurantController.deleteRestaurant
)

/** restaurant update */
router.put(
  "/update-restaurant/:restaurantId",
  restaurantController.updateRestaurant
)

module.exports = router;