const Joi = require("joi");

/**create review */
const createReview = {
    body: Joi.object().keys({
        user_id: Joi.string().required().trim(),
        restaurant_id: Joi.string().required().trim(),
        rating: Joi.number().integer().required(),
        comment: Joi.string().required().trim(),
    })
}

module.exports = {
    createReview
}