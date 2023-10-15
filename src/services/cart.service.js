const { Cart } = require("../models");

/* ------------------------------- create cart ------------------------------ */
const createCart = async(reqbody) => {
    return Cart.create(reqbody);
}

/* ---------------------------- get cart by user ---------------------------- */
const getCartByUser = async(user) => {
    return Cart.findOne({user});
}

/* ----------------------------- get cart by id ----------------------------- */
const getCartById = async(cartId) => {
    return Cart.findById(cartId);
}

/* ------------------------------ get cart list ----------------------------- */
const getCartList = async() => {
    return Cart.find().populate("user",{firstname:1,lastname:1,email:1,password:1}).populate("food1").populate("food2");
}

/* ------------------------------- delete cart ------------------------------ */
const deleteCart = async(cartId) => {
    return Cart.findByIdAndDelete(cartId);
}

/* ------------------------------- update cart ------------------------------ */
const updateCart = async(cartId,reqbody) => {
    return Cart.findByIdAndUpdate(cartId,{$set:reqbody});
}

module.exports = {
    createCart,
    getCartByUser,
    getCartById,
    getCartList,
    deleteCart,
    updateCart
}