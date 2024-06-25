// Please don't change the pre-written code
// Import the necessary modules here
const fs = require("fs");

const Solution = () => {
  // Write your code here
  fs.writeFileSync("notes.txt", "The world has enough coders");
  var data = fs.readFileSync("notes.txt", { encoding: "utf8" });
  console.log(data);
  try {
    fs.appendFileSync("notes.txt", "BE A CODING NINJA!");
  } catch (error) {
    console.log(error);
  }
  var data = fs.readFileSync("notes.txt", { encoding: "utf8" });
  console.log(data);
};
Solution();
module.exports = Solution;
