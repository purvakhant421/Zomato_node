const { Order } = require("../models");

/*  Get order by name */
const getOrderByName = async(order_name) => {
    return Order.findOne({order_name})
}

/*  Create order */
const createOrder = async(reqbody) => {
    return Order.create(reqbody);
}

 /* Get order list */
const getOrderList = async() => {
    return Order.find().populate("Cart").populate("User");
}

 /* Get order by id */
const getOrderById = async(orderId) => {
    return Order.findById(orderId);
}

/* Update order by id */
const updateOrder = async(orderId,reqbody) => {
    return Order.findByIdAndUpdate(orderId,{$set:reqbody});
}

 /* Delete order */
const deleteOrder = async(orderId) => {
    return Order.findByIdAndDelete(orderId);
}


module.exports = {
    createOrder,
    getOrderByName,
    getOrderList,
    getOrderById,
    updateOrder,
    deleteOrder
}
