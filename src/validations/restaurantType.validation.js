const Joi = require("joi");

/* ------------------------- create restaurant type ------------------------- */
const createRestaurantType = {
  body: Joi.object().keys({
    restaurant_type : Joi.string().required().trim(),
    type_desciption : Joi.string().required().trim(),
    cuisine_type : Joi.string().required().trim(),
  }),
};

module.exports = {
    createRestaurantType
}