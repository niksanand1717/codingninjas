// make the necessary imports here

import mongoose from "mongoose";

// implement the below schema
const messageSchema = mongoose.Schema({
  username: String,
  text: String,
  room: String,
  timestamp: Date,
});

export const ChatModel = mongoose.model("Chat", messageSchema);
