// No need to change the pre-written code
// Implement the features in io.on() section
import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

export const app = express();
app.use(cors());

export const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("Connection made.");

  // Handle user joining a room
  socket.on("initial", (username, room) => {
    console.log(`${username} joined room: ${room}`);
    socket.join(room);

    // Notify others in the room
    socket.to(room).emit("receive_message", {
      sender: "Server",
      message: `${username} has joined the room.`,
    });
  });

  // Handle sending messages
  socket.on("send_message", (data) => {
    const { room, message } = data;

    // Broadcast message to others in the room
    socket.to(room).emit("receive_message", {
      sender: socket.id, // Replace with username if available
      message: message,
    });

    // Acknowledge message to sender
    socket.emit("receive_message", {
      sender: "You",
      message: message,
    });
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("Connection disconnected.");
  });
});
