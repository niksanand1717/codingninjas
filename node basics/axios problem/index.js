// Please do not change the prewritten code
import axios from "axios";

const Solution = async () => {
  // Write your code here
  var response = await axios.get(
    "https://api.codingninjas.com/api/v3/event_tags"
  );
  // response = response;
  console.log(response);
};
Solution();
module.exports = Solution;
