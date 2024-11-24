// Please don't change the pre-written code
// Import the necessary modules here
import fs from "fs";

const fsPromise = fs.promises;
// Write your code here

const logger = async (logData) => {
  try {
    logData =
      new Date().toString() +
      `
       req URL: ${logData.path}
       reqBody: ${JSON.stringify(logData.body)}
    `;
    await fsPromise.appendFile("log.txt", logData);
  } catch (error) {
    console.error(error);
  }
};

export const loggerMiddleware = async (req, res, next) => {
  // Write your code here
  await logger(req);
  next();
};
export default loggerMiddleware;
