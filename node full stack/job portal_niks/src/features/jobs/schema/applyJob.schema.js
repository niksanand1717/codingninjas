// Please don't change the pre-written code
// Import the necessary modules here

import mongoose from "mongoose";

export const applyJobSchema = new mongoose.Schema({
  // Write your code here
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Job ID Required"],
    ref: "Job",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "User ID Required"],
    ref: "User",
  },
});
