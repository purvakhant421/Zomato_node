const express = require("express");
const { stateValidation } = require("../validations");
const { stateController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create state */
router.post(
  "/create-state",
  validate(stateValidation.createState),
  stateController.createState
);

/** state list */
router.get(
  "/list",
  stateController.getStateList
)

/** state delete */
router.delete(
  "/delete/:stateId",
  stateController.deleteState
)

/** state update */
router.put(
  "/update-state/:stateId",
  stateController.updateState
)

module.exports = router;