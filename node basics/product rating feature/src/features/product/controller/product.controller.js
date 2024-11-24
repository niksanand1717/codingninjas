// Please don't change the pre-written code
// Import the necessary modules here
// Write your code here

import { getAllUsers } from "../../user/model/user.model.js";
import { fetchAllProducts, rateProductModel } from "../model/product.model.js";

export const getAllProducts = (req, res, next) => {
  const products = fetchAllProducts();
  res.json({ success: true, products });
};
export const getOneProduct = (req, res, next) => {
  res.json({ success: true, msg: "getOneProduct working" });
};
export const addProduct = (req, res, next) => {
  res.json({ success: true, msg: "addProduct working" });
};
export const rateProduct = (req, res, next) => {
  // Write your code here
  const { userId, productId, rating } = req.query;

  // Validate the input
  if (!userId || !productId || !rating) {
    return res
      .status(400)
      .json({ success: false, msg: "Missing query parameters" });
  }

  // Ensure rating is a valid number between 0 and 5
  const parsedRating = parseInt(rating);
  if (isNaN(parsedRating) || parsedRating < 0 || parsedRating > 5) {
    return res
      .status(400)
      .json({ success: false, msg: "Rating must be a number between 0 and 5" });
  }

  // Check if the user exists
  const users = getAllUsers();
  let user;
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == userId) {
      user = users[i];
      break;
    }
  }
  // const user = users.filter((user) => user.id == userId);
  if (!user) {
    return res.status(404).json({ success: false, msg: "User not found" });
  }

  // Check if the product exists
  const products = fetchAllProducts();
  let product;
  for (let i = 0; i < products.length; i++) {
    if (products[i].id == productId) {
      product = products[i];
      break;
    }
  }
  // const product = products.filter((product) => product.id == productId);
  if (!product) {
    return res.status(404).json({ success: false, msg: "Product not found" });
  }

  // Add a new rating for the user
  const resp = rateProductModel(productId, userId, parsedRating);
  return res.status(200).json(resp);

  // Send the updated product details as the response
  // return res.json({
  //   success: true,
  //   msg: product,
  // });
};
