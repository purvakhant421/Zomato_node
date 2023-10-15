const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema(
    {
        item_name: {
            type: String,
            trim: true,
          },
          total_item: {
            type: Number,
            default: 0,
          },
          total_price: {
            type: Number,
            default: 0,
          },
          coupon_code: {
            type: String,
            trim: true,
          },
          user: {
            type: mongoose.Types.ObjectId,
            ref: "User",
          },
          food1: {
            type: mongoose.Types.ObjectId,
            ref: "Food",
          },
          food2: {
            type: mongoose.Types.ObjectId,
            ref: "Food",
          },
        is_active : {
            type : Boolean,
            default : true,
        },
    },
    {
        timestamps: true,
        versionkey: false,
    }
);

const Cart = mongoose.model("Cart" , cartSchema);
module.exports = Cart;