const Joi = require("joi");

/** create category */
const createBlog = {
  body: Joi.object().keys({
    blog_title: Joi.string().required().trim(),
    blog_description: Joi.string().required().trim(),
    blog_tags: Joi.string().required().trim(),
    blog_image: Joi.string().allow(""),
  }),
};

module.exports = {
    createBlog
}