const mongoose = require("mongoose");

// Admin schema
const adminSchema = new mongoose.Schema(
    {
        admin_name:{
            type : String,
            trim : true
        },
        password : {
            type : String,
            trim : true
        },
        restaurant_list:[
                {
                    restaurant_name : {
                        type : mongoose.Types.ObjectId,
                        ref : "Restaurant"
                    }
                },
                {
                    restaurant_name : {
                        type : mongoose.Types.ObjectId,
                        ref : "Restaurant"
                    }
                },
        ],
        verified : {
            type : Boolean,
            default : true
        },
        status : {
            type : Boolean,
            default : true
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps : true,
        versionKey : false
    }
)

const Admin = mongoose.model("Admin",adminSchema);
module.exports = Admin