// Please don't change the pre-written code
// Import the necessary modules here
const http = require("http");
const server = http.createServer((req, res) => {
  res.end("Response received at port 8080.");
});

// Write your code here
server.listen(8080, () => {
  console.log("Server started at port 8080");
});

module.exports = server;
