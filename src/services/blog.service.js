const { Blog } = require("../models");

// blog
const createBlog = async (reqBody) => {
  return Blog.create(reqBody);
};

// Get Blog list
const getBlogList = async (filter,options) => {
    // const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
    return Blog.find();
};

// Get Blog by name
const getBlogByTitle = async (blog_title) => {
  return Blog.findOne({ blog_title });
};

// Get blog details by id
const getBlogById = async (blogId) => {
  return Blog.findById(blogId);
};

// update blog
const updateDetails = async (blogId, reqBody) => {
  return Blog.findByIdAndUpdate(blogId, { $set: reqBody });
};

// Delete blog
const deleteBlog = async (blogId) => {
  return Blog.findByIdAndDelete(blogId);
};

module.exports = {
    createBlog,
    getBlogList,
    getBlogByTitle,
    getBlogById,
    updateDetails,
    deleteBlog,
}