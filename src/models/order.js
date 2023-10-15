const mongoose = require("mongoose");

/* order schema */
const orderSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true
        },
        delivery_address : {
            type : String,
            trim : true
        },
        order_date: {
            type: Date,
            default: Date.now,
        },
        user:{
            type : mongoose.Types.ObjectId,
            ref : "User"
        },
        cart:{
            type : mongoose.Types.ObjectId,
            ref : "Cart"
        },
        restaurant: {
            type : mongoose.Types.ObjectId,
            ref : "Restaurant"
        },
        order_status :{
            type : String,
            enum : ["place","cancel","reject"]
        },
        total_price: {
            type: Number,
            trim: true
        },
        payment_method:{
            type : String,
            trim : true
        },
        is_active:{
            type : Boolean,
            default : true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Order = mongoose.model("Order",orderSchema)
module.exports = Order;

