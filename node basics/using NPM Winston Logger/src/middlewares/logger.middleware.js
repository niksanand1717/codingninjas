// Please don't change the pre-written code
// Import the necessary modules here
import winston from "winston";

// Write your code here

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    // new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

export const loggerMiddleware = async (req, res, next) => {
  // Write your code here
  const message = ` ${new Date().toString()} \n req URL: ${
    req.originalUrl
  } \n reqBody: ${JSON.stringify(req.body)}`;
  logger.info(message);
  next();
};
export default loggerMiddleware;
