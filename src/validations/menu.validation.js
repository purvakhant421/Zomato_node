const joi = require("joi");

//create Menu
const createMenu = {
    body:joi.object({
        menu_name : joi.string().min(3).max(20).required(),
        menu_image : joi.string().trim().allow(""),
        food : joi.string().trim().required(),
        menu_description : joi.string().trim().required(),
        menu_price : joi.number().integer().required(),
        restorant : joi.string().trim().required(),
        restorant_type : joi.string().trim().required(),
    }),
};

module.exports = {
    createMenu
}