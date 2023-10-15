const { Menu } = require("../models");

//create Menu
const createMenu = async (reqBody) => {
    return Menu.create(reqBody)
};

//Menu list
const getMenuList = async (req, res) => {
    return Menu.find().populate("Food").populate("Restaurant").populate("RestaurantType")
};

//upadte Menu
const updateMenu = async (menuId, updateBody) => {
    return Menu.findByIdAndUpdate(menuId, { $set: updateBody })
};

//delete Menu
const deleteMenu = async (menuId) => {
    return Menu.findByIdAndDelete(menuId)
};

//find  Menu
const findMenuByName = async (menu_name) => {
    return Menu.findOne({ menu_name });
}

module.exports = {
    createMenu,
    getMenuList,
    updateMenu,
    deleteMenu,
    findMenuByName
}