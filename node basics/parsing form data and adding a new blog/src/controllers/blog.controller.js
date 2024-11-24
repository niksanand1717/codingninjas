// Please don't change the pre-written code
// Import the necessary modules here
import { blogs } from "../models/blog.model.js";

export const renderBlogs = (req, res) => {
  // Write your code here
  res.render("blogs.ejs", { blogs });
};
export const renderBlogForm = (req, res) => {
  // Write your code here
  res.render("addBlogForm");
};
export const addBlog = (req, res) => {
  // Write your code here
  blogs.push(req.body);
  // console.log(req.body);
  renderBlogs(req, res);
};
