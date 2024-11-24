// Please don't change the pre-written code
// Import the necessary modules here

import { body } from "express-validator";

export const formValidation = async (req, res, next) => {
  console.log(req.body);
  const rules = [
    // Write your code here
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Enter a valid email"),
    // body("image").custom((value, { req }) => {
    //   if (!req.file) {
    //     return "Profile image is required";
    //   }
    // }),
  ];
  next();
};
