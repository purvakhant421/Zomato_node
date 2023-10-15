const mongoose = require("mongoose");
const countrySchema = new mongoose.Schema(
    {
        country_name : {
            type : String,
            trim : true,
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

const Country = mongoose.model("Country" , countrySchema);
module.exports = Country;