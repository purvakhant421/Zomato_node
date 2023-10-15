const mongoose = require("mongoose");

/* review schema */
const reviewSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Types.ObjectId,
            ref: "User"
        },
        restaurant_id: {
            type: mongoose.Types.ObjectId,
            ref : "Restaurant"
        },
        rating: {
            type: Number,
            trim: true
        },
        comment: {
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

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review