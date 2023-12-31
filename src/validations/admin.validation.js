const Joi = require("joi");

// create admin validation
const createAdmin = {
    body: Joi.object({
            admin_name:Joi.string().required().trim(),
            password : Joi.string().required().trim(),
            res_list: Joi.array().items(Joi.object({
                                restaurant_name: Joi.string().required().trim(),
                                restaurant_name: Joi.string().optional().trim(),
                                restaurant_name: Joi.string().optional().trim(),
                                restaurant_name: Joi.string().optional().trim(),
                            })).required()})
  };


module.exports = {
    createAdmin
}