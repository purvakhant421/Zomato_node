const express = require("express");
const { countryValidation } = require("../validations");
const { countryController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create country */
router.post(
  "/create-country",
  validate(countryValidation.createCountry),
  countryController.createCountry
);

/** country list */
router.get(
  "/list",
  countryController.getCountryList
)

/** country delete */
router.delete(
  "/delete/:countryId",
  countryController.deleteCountry
)

/** country update */
router.put(
  "/update-country/:countryId",
  countryController.updateCountry
)

module.exports = router;