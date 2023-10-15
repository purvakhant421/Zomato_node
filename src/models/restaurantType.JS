const mongoose = require("mongoose");
const restaurantTypeSchema = new mongoose.Schema(
    {
        restaurant_type : {
            type : String,
            trim : true
        },
        type_desciption : {
            type : String,
            trim : true
        },
        cuisine_type : {
            type : String,
            trim : true
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

const RestaurantType = mongoose.model("RestaurantType" , restaurantTypeSchema);
module.exports = RestaurantType;