const express = require("express");
const { foodValidation } = require("../validations");
const { foodController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create food */
router.post(
  "/create-food",
  validate(foodValidation.createFood),
  foodController.createFood
);

/** food list */
router.get(
  "/list",
  foodController.getFoodList
)

/** food delete */
router.delete(
  "/delete/:foodId",
  foodController.deleteFood
)

/** food update */
router.put(
  "/update-food/:foodId",
  foodController.updateFood
)

module.exports = router;