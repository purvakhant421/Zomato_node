const { orderService } = require("../services");

/* Create order */
const createOrder = async (req, res) => {
  try {
    const reqbody = req.body;
    // const orderExist = await orderService.getOrderByUser(reqbody.user);
    // if (orderExist) {
    //   throw new Error("Order already create by user..!");
    // }
    const order = await orderService.createOrder(reqbody);
    if (!order) {
      throw new Error("Something went wrong..!");
    }
    res.status(200).json({
      success: true,
      message: "Order created successfully..!",
      data: order,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/* gey order list */
const getOrderList = async(req,res) => {
  try {
      const orderList = await orderService.getOrderList();
      if(!orderList){
          throw new Error("Order list does not exist..");
      }
      res.status(200).json({
          success:true,
          message:"Order list dispatch successfully.. ",
          data:orderList
      });
  } catch (error) {
      res.status(400).json({
          success:false,
          message: error.message,
      });
  }
}
/* update order */
const updateOrder = async (req, res) => {
  try {
    const orderExist = await orderService.getOrderById(req.params.orderId);
    if (!orderExist) {
      throw new Error("order does not exist..!");
    }
    const updated = await orderService.updateOrder(
      req.params.orderId,
      req.body
    );
    if (!updated) {
      throw new Error("Something went wrong..!");
    }
    res.status(200).json({
      success: true,
      message: "Order updated successfully..!",
      data: req.body,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/*  delete order  */
const deleteOrder = async (req, res) => {
  try {
    const orderExist = await orderService.getOrderById(req.params.orderId);
    if (!orderExist) {
      throw new Error("Order does not exist..!");
    }
    const order = await orderService.deleteOrder(req.params.orderId);
    if (!order) {
      throw new Error("Something went wrong..!");
    }
    res.status(200).json({
      success: true,
      message: "Order deleted successfully..!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createOrder,
  getOrderList,
  updateOrder,
  deleteOrder,
};