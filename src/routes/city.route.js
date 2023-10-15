const express = require("express");
const { cityValidation } = require("../validations");
const { cityController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create city */
router.post(
  "/create-city",
  validate(cityValidation.createCity),
  cityController.createCity
);

/** city list */
router.get(
  "/list",
  cityController.getCityList
)

/** city delete */
router.delete(
  "/delete/:cityId",
  cityController.deleteCity
)

/** city update */
router.put(
  "/update-city/:cityId",
  cityController.updateCity
)

module.exports = router;