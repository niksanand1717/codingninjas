// Please don't change the pre-written code
// Import the necessary modules here

import { getAllUsers } from "../features/user/model/user.model.js";

const basicAuthMiddleware = (req, res, next) => {
  // Write your code here
  const authHeader = req.headers["authorization"];

  // Check if Authorization header is present
  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return res.status(401).send("Authorization required");
  }

  // Get base64 encoded credentials
  const base64Credentials = authHeader.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString(
    "ascii"
  );
  const [username, password] = credentials.split(":");

  const users = getAllUsers();

  let isValidUser = false;
  users.forEach((user) => {
    if (user.email === username && user.password === password)
      isValidUser = true;
  });

  if (isValidUser) {
    next(); // Proceed to the next middleware or route handler
  } else {
    res.status(401).json({
      success: false,
      message: "no authorization details found",
    });
  }
};

export default basicAuthMiddleware;
