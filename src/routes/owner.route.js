const express = require("express");
const validate = require("../middlewares/validate");
const { ownerValidation } = require("../validations");
const { ownerController } = require("../controllers");
const router = express.Router();

//create Owner
router.post(
    "/create-owner",
    validate(ownerValidation.createOwner),
    ownerController.createOwner
);
//Owner list
router.get(
    "/owner-list",
    ownerController.getOwnerList
);
//delete Owner
router.delete(
    "/delete-owner/:ownerId",
    ownerController.deleteOwner
);
//update Owner
router.put(
    "/update-owner/:ownerId",
    ownerController.updateOwner
);

module.exports = router;