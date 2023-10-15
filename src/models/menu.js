const mongoose = require("mongoose")

const menuSchema = new mongoose.Schema(
    {
        menu_name: {
            type: String,
            trim: true,
        },
        menu_image : {
            type: String,
            trim: true
        },
        food: {
            type: mongoose.Types.ObjectId,
            ref: "Food",
        },
        menu_description : {
            type: String,
            trim: true,
        },
        menu_price: {
            type: Number,
            trim: true,
        },
        restorant: {
            type : mongoose.Types.ObjectId,
            ref : "Restaurant",
        },
        restorant_type: {
            type : mongoose.Types.ObjectId,
            ref : "RestaurantType"
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const Menu = mongoose.model("Menu",menuSchema);
module.exports = Menu