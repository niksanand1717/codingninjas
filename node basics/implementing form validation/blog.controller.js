// Please don't change the pre-written code

export const validateBlog = (req, res) => {
  // Write your code here
  let errors = [];
  const { title, description, image } = req.body;
  var imgUrl;
  try {
    imgUrl = new URL(image);
  } catch (error) {
    errors.push("The image URL provided should be a valid URL");
  }
  if (!title || title.length < 3) {
    errors.push("The title field should not be empty");
    errors.push("The title field should contain at least 3 characters");
  }
  if (!description || description.length < 10) {
    errors.push("The description field should not be empty");
    errors.push("The description field should contain at least 10 characters");
  }

  console.log(errors);
  if (errors.length > 0) {
    res.status(401).render("addBlog", { errors: errors, success: false });
  } else {
    res
      .status(201)
      .render("addBlog", { errors: null, success: "validation successfull !" });
  }
};
export const renderBlogForm = (req, res) => {
  res.render("addBlog", { errors: null, success: false });
};
