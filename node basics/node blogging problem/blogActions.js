// Do not change the pre-written code.
// Make the necessary imports here.
import path from "path";
import fs from "fs";

export const writeBlog = (filePath, name) => {
  // Write your code here.
  fs.appendFileSync(filePath, name);
};

export const publishBlog = (filePath) => {
  // Write your code here.
  try {
    var data = fs.readFileSync(filePath, { encoding: "utf8" });
    return data;
  } catch (error) {
    console.log(error);
  }
};
