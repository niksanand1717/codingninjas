// Please don't change the pre-written code
// Import the necessary modules here
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  var data = fs.readFileSync("index.html");
  res.end(data);
});
// Write your code here

server.listen(8080, () => {
  console.log("Server started on port 8080");
});
module.exports = server;
