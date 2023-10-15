const Joi = require("joi");

/* ------------------------------- create cart ------------------------------ */
const createCart = {
    body: Joi.object().keys({
        item_name : Joi.string().required().trim(),
        total_items : Joi.number().required(),
        total_price : Joi.number().required(),
        coupon_code : Joi.string().required().trim(),
        user : Joi.string().required().trim(),
        food1 : Joi.string().required().trim(),
        food2 : Joi.string().optional().trim(),
    })
}

module.exports = {
    createCart
}