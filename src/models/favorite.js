const mongoose = require("mongoose");

/* favorite schema */
const favoriteSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Types.ObjectId,
            ref: "User"
        },
        restaurant_id: {
            type: mongoose.Types.ObjectId,
            ref: "Restaurant"
        },
        menuItems_id: {
            type: mongoose.Types.ObjectId,
            ref: "menuItems"
        },
        favorite_item_name: {
            type: String,
            trim: true
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Favorite = mongoose.model("Favorite", favoriteSchema);
module.exports = Favorite