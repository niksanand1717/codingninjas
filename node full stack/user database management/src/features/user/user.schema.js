// Import the necessary modules here

// Start creating your user schema here
import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [3, "Name must be at least 3 characters long"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email address"],
    },
    mobile: {
      type: String,
      required: [true, "Mobile number is required"],
      unique: true,
      validate: {
        validator: function (v) {
          return /\d{10}/.test(v); // Assumes a 10-digit mobile number
        },
        message: "Please enter a valid 10-digit mobile number",
      },
    },
    age: {
      type: Number,
      required: [true, "Age is required"],
      min: [0, "Age must be at least 0"],
      max: [100, "Age cannot exceed 100"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
    type: {
      type: String,
      required: [true, "User type is required"],
      enum: {
        values: ["student", "fresher", "experienced"],
        message: "Type must be either student, fresher, or experienced",
      },
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

// Indexes for unique fields
userSchema.index({ email: 1 }, { unique: true });
userSchema.index({ mobile: 1 }, { unique: true });

export const User = mongoose.model("User", userSchema);
