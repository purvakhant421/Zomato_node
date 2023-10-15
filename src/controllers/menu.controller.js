const { menuService } = require("../services");

//create Menu
const createMenu = async (req, res) => {
    try {
        const reqBody = req.body;
        if (req.file) {
            reqBody.menu_img = req.file.filename
        } else {
            throw new Error("Menu Images Is Required....!");
        }
            const Menu = await menuService.createMenu(reqBody);
            if (!Menu) {
                throw new Error("Something went wrong..!");
            };
            res.status(200).json({
                success: true,
                message: "Menu Data Create SuccessFully..!",
                data: Menu,
            });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

//Menu List
const getMenuList = async (req, res) => {
    try {
        const List = await menuService.getMenuList(req, res);
        res.status(200).json({
            success: true,
            message: "Get menu Data List SuccessFully..!",
            data: List
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

//delete Menu
const deleteMenu = async (req, res) => {
    try {
        const menuId = req.params.menuId;
        const MenuExist = await menuService.deleteMenu(menuId);
        if (!MenuExist) {
            throw new Error("Menu Data Not Found !...");
        };
        await menuService.deleteMenu(menuId);
        res.status(200).json({
            success: true,
            message: "Suucessfully Menu Data Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//update Menu
const updateMenu = async (req, res) => {
    try {
        const menuId = req.params.menuId;
        const MenuExist = await menuService.updateMenu(menuId);
        if (!MenuExist) {
            throw new Error("Menu Data Not Found !...");
        };
        await menuService.updateMenu(menuId, req.body);
        res.status(200).json({
            success: true,
            message: "Menu Data update successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

//function expoart
module.exports = {
    createMenu,
    getMenuList,
    deleteMenu,
    updateMenu
}