const { Admin } = require("../models");

/* Create admin */
const createAdmin = async(reqbody) => {
    return Admin.create(reqbody);
}

/* Get admin by name */
const getAdminByName = async(admin_name) => {
    return Admin.findOne({admin_name})
}

/* Get admin list */
const getAdminList = async() => {
    return Admin.find().populate("restaurant_name");
}

/* Get admin by id */
const getAdminById = async(adminId) => {
    return Admin.findById(adminId);
}

/* Update admin by id */
const updateAdmin = async(adminId,reqbody) => {
    return Admin.findByIdAndUpdate(adminId,{$set:reqbody});
}

/* Delete admin */
const deleteAdmin = async(adminId) => {
    return Admin.findByIdAndDelete(adminId);
}


module.exports = {
    createAdmin,
    getAdminByName,
    getAdminList,
    getAdminById,
    updateAdmin,
    deleteAdmin,
}