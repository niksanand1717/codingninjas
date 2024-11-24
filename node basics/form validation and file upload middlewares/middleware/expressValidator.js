// Please don't change the pre-written code
// Import the necessary modules here
import { body } from "express-validator";

export const formValidation = async (req, res, next) => {
  // Write your code here
  body('name')
  .notEmpty()
  .withMessage("Name is required");

  body('email')
  .isEmail()
  .withMessage("Enter a valid Email");

  body('image')
  .
};
