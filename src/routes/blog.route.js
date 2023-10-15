const express = require("express");
const { blogValidation } = require("../validations");
const { blogController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create blog */
router.post(
  "/create-blog",
  validate(blogValidation.createBlog),
  blogController.createBlog
);

/** blog list */
router.get(
  "/list",
  blogController.getBlogList
)

router.delete(
  "/delete/:blogId",
  blogController.deleteBlog
)

router.put(
  "/update-blog/:blogId",
  blogController.updateBlog
)

module.exports = router;