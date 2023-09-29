const { blogService } = require("../services");

/** create Blog */
const createBlog = async (req, res) => {
  try {
    const reqBody = req.body;
    const blog = await blogService.createBlog(reqBody);
    if (!blog) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Blog create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get Blog list */
const getBlogList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { blog_title: { $regex: search, $options: "i" } },
        { blog_description : { $regex: search, $options: "i" } },
      ];
    }
    const getList = await blogService.getBlogList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get blog list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** get blog count */
const createCount = async (req, res) => {
  try {
    const reqBody = req.body;
    const blog = await blogService.createCount(reqBody);
    if (!blog) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Blog create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};


/** Delete Blog */
const deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const blogExists = await blogService.getBlogById(blogId);
    if (!blogExists) {
      throw new Error("Blog not found!");
    }
    await blogService.deleteBlog(blogId);

    res.status(200).json({
      success: true,
      message: "Blog delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update blog */
const updateBlog = async (req, res) => {
  try {
    const reqBody = req.body;
    const blogId = req.params.blogId;
    const blogExists = await blogService.getBlogById(blogId);
    if (!blogExists) {
      throw new Error("Blog not found!");
    }
    await blogService.updateDetails(blogId,reqBody);

    res.status(200).json({
      success: true,
      message: "Blog update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createBlog,
  getBlogList,
  createCount,
  deleteBlog,
  updateBlog
};