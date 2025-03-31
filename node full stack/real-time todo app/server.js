// Complete the server.js file to make user's add, delete and update the todos.
import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

import Task from "./task.schema.js";

export const app = express();
app.use(cors());

export const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", async (socket) => {
  console.log("Connection Established");

  // Send previous tasks to client
  const prevTasks = await Task.find({});
  socket.emit("prevTask", prevTasks);

  // Add new task
  socket.on("newTask", async (data) => {
    console.log("🔹 New Task Received:", data);

    const task = new Task({ text: data });
    await task.save();

    io.emit("taskAdded", task); // Broadcast to all clients
  });

  // Delete task
  socket.on("deleteTask", async (taskId) => {
    await Task.deleteOne({ _id: taskId });
    io.emit("taskDeleted", taskId); // Notify all clients
  });

  // Update task
  socket.on("updateTask", async ({ id, text }) => {
    await Task.updateOne({ _id: id }, { text });
    io.emit("taskUpdated", { id, text }); // Notify all clients
  });

  socket.on("disconnect", () => {
    console.log("Disconnected");
  });
});
