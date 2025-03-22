// Please don't change the pre-written code
// Import the necessary modules here

import { User } from "./user.schema.js";

export const userRegisterationRepo = async (userData) => {
  // Write your code here

  try {
    // Attempt to create a new user
    const user = new User(userData);
    const savedUser = await user.save();

    return {
      success: true,
      res: savedUser,
    };
  } catch (error) {
    // Handle validation errors
    const errorMessage =
      error.message || "An error occurred during registration";
    return {
      success: false,
      error: {
        statusCode: 400,
        msg: errorMessage,
      },
    };
  }
};
export const userLoginRepo = async (userData) => {
  // Write your code here
  try {
    const user = await User.findOne({ email: userData.email });

    if (!user || user.password !== password) {
      return {
        success: false,
        error: {
          statusCode: 401,
          msg: "Invalid credentials",
        },
      };
    }

    return {
      success: true,
      res: user,
    };
  } catch (error) {
    return {
      success: false,
      error: {
        statusCode: 500,
        msg: "An error occurred during login",
      },
    };
  }
};

export const updateUserPasswordRepo = async (_id, newpassword, next) => {
  // Write your code here
  try {
    const user = await User.findById(userId);

    if (!user) {
      return {
        success: false,
        error: {
          statusCode: 404,
          msg: "User not found",
        },
      };
    }

    user.password = newPassword;
    const updatedUser = await user.save();

    return {
      success: true,
      res: updatedUser,
    };
  } catch (error) {
    return {
      success: false,
      error: {
        statusCode: 500,
        msg: "An error occurred while updating the password",
      },
    };
  }
};
