// Please don't change the pre-written code
// Import the necessary modules here

import { addUser, confirmLogin } from "../model/user.model.js";

export const registerUser = (req, res, next) => {
  // Write your code here
  const { name, email, password } = req.body;
  const resp = addUser({ name, email, password });

  return res.status(201).json({ status: "success", user: resp });
};

export const loginUser = (req, res) => {
  // Write your code here
  const { email, password } = req.body;
  const resp = confirmLogin({ email, password });
  if (resp) {
    return res.status(200).json({ status: "success", msg: "login successful" });
  } else {
    return res
      .status(400)
      .json({ status: "failure", msg: "invalid user details" });
  }
};
