const { adminService } = require("../services");

// Create admin
const createAdmin = async(req,res) => {
    try {
        const reqbody = req.body;
        const adminExist = await adminService.getAdminByName(reqbody.admin_name);
        if(adminExist){
            throw new Error("Admin on this name already exist -!- ");
        }
        const admin = await adminService.createAdmin(reqbody);
        if(!admin){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Admin created successfully ^-^ ",
            data:admin
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}
// Update admin
const updateAdmin = async(req,res) => {
    try {
        const adminId = req.params.adminId;
        const reqbody = req.body;
        const adminExist = await adminService.getAdminById(adminId);
        if(!adminExist){
            throw new Error("Admin does not exist -!- ");
        }
        const adminUpdate = await adminService.updateAdmin(adminId,reqbody);
        if(!adminUpdate){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Admin updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}
// Delete admin
const deleteAdmin = async(req,res) => {
    try {
        const adminId = req.params.adminId;
        const adminExist = await adminService.getAdminById(adminId);
        if(!adminExist){
            throw new Error("Admin does not exist -!- ");
        }
        const adminDelete = await adminService.deleteadmin(adminId);
        if(!adminDelete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Admin deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}
// Get admin list
const getAdminList = async(req,res) => {
    try {
        const adminList = await adminService.getAdminList();
        if(!adminList){
          throw new Error("Admin list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get admin list dispatch successfully ^-^ ",
          data: adminList,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

// Expoting controller object
module.exports = {
    createAdmin,
    getAdminList,
    updateAdmin,
    deleteAdmin,
}