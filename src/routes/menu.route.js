const express = require("express");
const validate = require("../middlewares/validate");
const {upload} = require("../middlewares/upload");
const { menuController } = require("../controllers");
const { menuValidation } = require("../validations");
const router = express.Router();

//create Menu
router.post(
    "/create-menu",
    upload.single("menu_image"),
    validate(menuValidation.createMenu),
    menuController.createMenu
);

//Menu list
router.get(
    "/menu-list",
    menuController.getMenuList
);

//delete Menu
router.delete(
    "/delete-menu/:menuId",
    menuController.deleteMenu
);

//update Menu
router.put(
    "/update-menu/:menuId",
    menuController.updateMenu
);

module.exports = router;