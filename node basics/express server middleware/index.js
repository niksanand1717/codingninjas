// Please don't change the pre-written code.

const express = require("express");
const app = express();

const logRequest = (req, res, next) => {
  // Write your code here
  if (req.method == "GET") {
    console.log(req.method);
    console.log(req.url);
    next();
  } else {
    next();
  }
};

app.use("/", logRequest);

// This route should only be accessible after passing through the 'logRequest' middleware.
// Make necessary changes in the route below.
app.get("/", (req, res) => {
  res.send("Coding Ninjas!");
});

module.exports = app;
