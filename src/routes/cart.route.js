const express = require("express");
const validate = require("../middlewares/validate");
const { cartValidation } = require("../validations");
const { cartController } = require("../controllers");

const router = express.Router();

/* ------------------------------- create cart ------------------------------ */
router.post(
    "/create-cart",
    validate(cartValidation.createCart),
    cartController.createCart
)

/* ------------------------------ get cart list ----------------------------- */
router.get(
    "/list",
    cartController.getCartList
)

/* ------------------------------- update cart ------------------------------ */
router.put(
    "/update-cart/:cartId",
    validate(cartValidation.createCart),
    cartController.updateCart
)

/* ------------------------------- delete cart ------------------------------ */
router.delete(
    "/delete-cart/:cartId",
    cartController.deleteCart
)

module.exports = router