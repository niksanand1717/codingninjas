// Please don't change the pre-written code

export class customErrorHandler extends Error {
  constructor(statusCode, errMessage) {
    super(errMessage);
    this.statusCode = statusCode;
  }
}

export const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof customErrorHandler) {
    res.status(err.statusCode).send(err.message);
  } else {
    res.status(500).send("oops! something went wrong...Try again later!");
  }
  next();
};
