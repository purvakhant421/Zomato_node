const express = require("express");
const validate = require("../middlewares/validate");
const { orderValidation } = require("../validations");
const { orderController } = require("../controllers");
const router = express.Router();

/* create order */
router.post(
    "/create-order",
    validate(orderValidation.createOrder),
    orderController.createOrder
)

/*  get order li9st */
router.get(
    "/list",
    orderController.getOrderList
)

/* update order */
router.put(
    "/update-order/:orderId",
    validate(orderValidation.createOrder),
    orderController.updateOrder
)

/* delete order */
router.delete(
    "/delete-order/:orderId",
    orderController.deleteOrder
    )

module.exports = router