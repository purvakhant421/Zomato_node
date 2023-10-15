const mongoose = require("mongoose");

//Creating schema for blog
const blogSchema = new mongoose.Schema(
    {
        blog_title : {
            type : String,
            trim : true,
        },
        blog_description : {
            type : String,
            trim : true,
        },
        blog_tags : {
            type : String,
            trim : true,
        },
        blog_image : {
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

const Blog = mongoose.model("Blog" , blogSchema);
module.exports = Blog;