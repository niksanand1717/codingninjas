// Please don't change the pre-written code
// Import the necessary modules here

import { addToCart, removeFromCart } from "../model/cart.model.js";

export const addToCartController = (req, res) => {
  // Write your code here
  const { productId, quantity } = req.query;
  const { userId } = req.cookies;
  console.log({ productId, quantity, userId });

  if (!userId || !productId || !quantity) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const resp = addToCart(userId, productId, quantity);
    return res.status(200).json({
      success: true,
      item: resp,
    });
  } catch (error) {
    return res.status(500).json({ error: "Unable to add item to cart" });
  }
};

// export const removeFromCartController = (req, res) => {
//   // Write your code here
//   const { cartItemId } = req.query;

//   const { userId } = req.cookies;

//   if (!userId || !cartItemId) {
//     return res
//       .status(400)
//       .json({ success: false, msg: "operation not allowed" });
//   }

//   try {
//     const resp = removeFromCart(userId, cartItemId);
//     return res.status(200).json({
//       success: true,
//       deletedCartItem: resp,
//     });
//   } catch (error) {
//     return res
//       .status(400)
//       .json({ success: false, msg: "operation not allowed" });
//   }
// };

export const removeFromCartController = (req, res) => {
  const userId = req.userId;
  const itemId = req.params.itemId;
  const resp = removeFromCart(userId, itemId);
  if (resp.success) {
    return res.status(200).json(resp);
  } else {
    return res.status(400).json(resp);
  }
};
