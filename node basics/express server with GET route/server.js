const { server } = require("./index");

server.get("/", (req, res) => {
  res.send("Be a Coding Ninja.");
});

server.listen(3000, () => {
  console.log("server is listening at port 3000");
});
