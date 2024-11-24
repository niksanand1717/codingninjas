// Please don't change the pre-written code
// Import the necessary modules here
import axios from "axios";

export const userModel = async () => {
  // Write your code here
  try {
    var response = await axios.get("https://dummyjson.com/users");
    console.log(JSON.parse(response.status));
    return response.data["users"];
  } catch (error) {
    console.error(error);
  }
};
