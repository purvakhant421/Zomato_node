const Joi = require("joi");

/* create order */
const createOrder = {
    body: Joi.object().keys({
      name: Joi.string().required().trim(),
      delivery_address: Joi.string().required().trim(),
      cart: Joi.string().required().trim(),
      user: Joi.string().required().trim(),
      restaurant: Joi.string().required().trim(),
      order_status: Joi.string().required().trim(),
      total_price: Joi.number().integer().required(),
      payment_method: Joi.string().required().trim(),
    }),
};

module.exports = {
  createOrder,
};