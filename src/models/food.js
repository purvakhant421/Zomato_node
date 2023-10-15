const mongoose = require("mongoose")

const foodSchema = new mongoose.Schema(
    {
        food_name:{
            type:String,
            trim:true
        },
        food_price:{
            type:Number,
            default:10
        },
        restaurant:{
            type:mongoose.Types.ObjectId,
            ref:"Restaurant"
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

const Food = mongoose.model("Food",foodSchema);
module.exports = Food