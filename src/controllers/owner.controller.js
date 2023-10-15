const { ownerService } = require("../services");

//crete Owner
const createOwner = async (req, res) => {
    try {
        const reqBody = req.body;
        const email = await ownerService.FindEmail(reqBody.email);
        if (!email) {
            throw new Error("Owner Already Created By This Email ==> " + email.email + ",Please Create By this New Email..!");
        }
            let Owner = await ownerService.createOwner(reqBody);
            if (!Owner) {
                throw new Error(" Owner Not Created..");
            };
            res.status(200).json({
                success: true,
                message: "Owner Created SuccessFully..!",
                data: Owner
            });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//Owner List
const getOwnerList = async (req, res) => {
    try {
        const List = await ownerService.getOwnerList(req, res);
        res.status(200).json({
            success: true,
            message: " Owner Data SuccessFully List Get..!",
            data: List
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//delete Owner
const deleteOwner = async (req, res) => {
    try {
        const ownerId = req.params.ownerId;
        const ownerExists = await ownerService.OwnerId(ownerId);
        if (!ownerExists) {
            throw new Error("Owner Not Found..!");
        };
        await ownerService.deleteOwner(ownerId);
        res.status(200).json({
            success: true,
            message: "Owner data deleted successfully..!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

//update Owner
const updateOwner = async (req, res) => {
    try {
        const ownerId = req.params.ownerId;
        const ownerExists = await ownerService.OwnerId(ownerId);
        if (!ownerExists) {
            throw new Error("Owner Not Found..!");
        };
        await ownerService.updateOwner(ownerId, req.body);
        res.status(200).json({
            success: true,
            message: "Owner Data update successfully..!",
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
    createOwner,
    getOwnerList,
    deleteOwner,
    updateOwner,
}