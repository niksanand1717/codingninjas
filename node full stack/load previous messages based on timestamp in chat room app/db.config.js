import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

let baseUrl = process.env.MONGODBI;

export const connectToDatabase = async () => {
  // Debugging: Log the MongoDB URL to check if it's correctly loaded

  try {
    console.log("MONGODB ENV:", process.env.MONGODB);
    console.log("MongoDB Connecting to:", baseUrl);
    await mongoose.connect(baseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected using mongoose");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
  }
};
