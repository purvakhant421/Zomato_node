const Joi = require("joi");

/**create favorite */
const createFavorite = {
    body: Joi.object().keys({
        user_id : Joi.string().required().trim(),
        restaurant_id : Joi.string().required().trim(),
        menuItems_id : Joi.string().required().trim(),
        favorite_item_name : Joi.string().required().trim(),
    })
}

module.exports = {
    createFavorite
}