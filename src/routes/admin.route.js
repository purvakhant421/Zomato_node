const express = require("express");
const validate = require("../middlewares/validate");
const { adminValidation } = require("../validations");
const { adminController } = require("../controllers");
const router = express.Router();

/* Create admin */
router.post(
  "/create-admin",
  validate(adminValidation.createAdmin),
  adminController.createAdmin
);

/*Update admin with id */
router.put(
  "/update-admin/:adminId",
  validate(adminValidation.createAdmin),
  adminController.updateAdmin
);

/* Delete admin by id */
router.delete(
    "/delete-admin/:adminId",
    adminController.deleteAdmin
);

/* admin list */
router.get(
    "/list",
    adminController.getAdminList
);

module.exports = router;