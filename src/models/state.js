const mongoose = require("mongoose");
// new keyword is optional in following block of code
const stateSchema = new mongoose.Schema(
    {
        state_name: {
            type:String,
            trim:true
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
        versionKey: false
    }
)

const State = mongoose.model("State",stateSchema);
module.exports = State;