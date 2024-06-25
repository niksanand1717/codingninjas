// Import required module
const readline = require("readline");
const Solution = () => {
  // Write your code here
  const qInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  qInterface.question("", (num1) => {
    qInterface.question("", (num2) => {
      var numm1 = Number(num1);
      var numm2 = Number(num2);

      if (numm1 > numm2) {
        console.log(numm1);
      } else {
        console.log(numm2);
      }
    });
  });
  qInterface.close();
};

Solution();
module.exports = Solution;
