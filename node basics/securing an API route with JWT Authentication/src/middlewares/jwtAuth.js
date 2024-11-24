// Please don't change the pre-written code
// Import the necessary modules here

import jwt from "jsonwebtoken";
import { getAllUsers } from "../features/user/model/user.model.js";

const jwtAuth = (req, res, next) => {
  // Write your code here
  const token = req.cookies.jwtToken;
  console.log(token);

  // If no token is found, return a 401 Unauthorized response
  if (!token) {
    return res.status(401).json({ success: false, msg: "Token missing" });
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, "mySecret");

    // If verification is successful, attach the decoded token data to req.user
    req.user = decoded;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // If token is invalid or expired, send a 401 Unauthorized response
    return res
      .status(401)
      .json({ success: false, msg: "Token invalid or expired" });
  }
};

export default jwtAuth;
