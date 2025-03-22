// Please don't change the pre-written code
// Import the necessary modules here
import mongoose from "mongoose";

export const connectUsingMongoose = async () => {
  // write your code here
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Books", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected using mongoose");
  } catch (error) {
    console.log("Error connecting using mongoose");
  }
};
