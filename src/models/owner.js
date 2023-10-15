const mongoose = require("mongoose");

// owner model schema defiend
const ownerSchema = new mongoose.Schema(
    {
        owner_name: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
        },
        contact_no: {
            type: Number,
            trim: true,
        },
        restorant: {
            type: mongoose.Types.ObjectId,
            ref: "Restaurant",
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);


const Owner = mongoose.model("Owner", ownerSchema);
module.exports = Owner;