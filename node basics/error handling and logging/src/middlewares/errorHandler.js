// // Please don't change the pre-written code
// // Import the necessary modules here

// export class customErrorHandler extends Error {
//   constructor(statusCode, errMessage) {
//     super(errMessage);
//     this.statusCode = statusCode;
//   }
// }

// export const errorHandlerMiddleware = (err, req, res, next) => {
//   // Write your code here
// };

// Import necessary modules
import { logger } from "./logger.middleware.js"; // Adjust path if necessary

export class customErrorHandler extends Error {
  constructor(statusCode, errMessage) {
    super(errMessage);
    this.statusCode = statusCode;
  }
}

export const errorHandlerMiddleware = (err, req, res, next) => {
  // Set status code; default to 500 for unhandled errors
  const statusCode = err.statusCode || 500;

  // Determine error message based on error type
  const errorMessage =
    statusCode === 500
      ? "Oops! Something went wrong... Please try again later!"
      : err.message;

  // Log error details with Winston
  logger.error({
    level: "error",
    timestamp: new Date().toString(),
    "request URL": req.originalUrl,
    "error message": err.message,
  });

  // Send JSON response with status code and error message
  res.status(statusCode).json({ message: errorMessage });
};
