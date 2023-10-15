const mongoose = require("mongoose");
const citySchema = new mongoose.Schema(
    {
        city_name : {
            type : String,
            trim : true,
        },
        state : {
            type:mongoose.Types.ObjectId,
            ref :"State"
        },
        country: {
            type:mongoose.Types.ObjectId,
            ref:"Country"
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

const City = mongoose.model("City" , citySchema);
module.exports = City;