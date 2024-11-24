// Please do not change the prewritten code

import http from "http";
import fs from "fs";

const data = fs.readFileSync("data.txt", { encoding: "utf8" });

const server = http.createServer((req, res) => {
  //  Write your code here
  if (req.method == "POST") {
    try {
      fs.appendFileSync("data.txt", req.body);
    } catch (error) {
      console.log(error);
    }
    let pData = fs.readFileSync("data.txt", { encoding: "utf8" });
    console.log(pData);
    res.on("end", () => {
      res.end({
        message: "Be yourself; everyone else is already taken.",
      });
    });
  }

  res.end("data received");
});

export default server;
