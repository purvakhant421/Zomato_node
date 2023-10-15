const { cartService,userService } = require("../services");

/* ------------------------------- create cart ------------------------------ */ 
const createCart = async(req,res) => {
    try {
        const reqbody = req.body;
        const userExist = await userService.getUserById(reqbody.user);
        if(!userExist){
            throw new Error("User does not Exist..!");
        }
        const cartExist = await cartService.getCartByUser(reqbody.user);
        if(cartExist){
            throw new Error("Cart already Exist for this uset..!");
        }
        const cart = await cartService.createCart(reqbody);
        if(!cart){
            throw new Error("Something went wront..!");
        }
        res.status(200).json({
            success:true,
            message:"Cart created successfull..!",
            data:cart
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}

/* ------------------------------ get cart list ----------------------------- */
const getCartList = async(req,res) => {
    try {
        const cartlist = await cartService.getCartList();
        if(!cartlist){
            throw new Error("Cart list data does not Exist..!");
        }
        res.status(200).json({
            success:true,
            message:"Cart list dispatch successfull..!",
            data:cartlist
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}

/* ------------------------------- delete cart ------------------------------ */
const deleteCart = async(req,res) => {
    try {
        const cartExist = await cartService.getCartById(req.params.cartId)
        if(!cartExist){
            throw new Error("Cart does not Exist..!");
        }
        const cartdelete = await cartService.deleteCart(req.params.cartId);
        if(!cartdelete){
            throw new Error("Something went wront..! ")
        }
        res.status(200).json({
            success:true,
            message:"Cart deleted successfull..!",
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}

/* ------------------------------- update cart ------------------------------ */
const updateCart = async(req,res) => {
    try {
        const cartExist = await cartService.getCartById(req.params.cartId);
        if(!cartExist){
            throw new Error("Cart does not Exist..!");
        }
        const updated = await cartService.updateCart(req.params.cartId,req.body);
        if(!updated){
            throw new Error("Something went wrong");
        }
        res.status(200).json({
            success:true,
            message:"Cart updated successfull..!",
            data:req.body
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}


module.exports = {
    createCart,
    getCartList,
    deleteCart,
    updateCart
}