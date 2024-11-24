// Please don't change the pre-written code
// Import the necessary modules here

let cartId = 0;
export class cartModel {
  constructor(userId, productId, quantity) {
    this.id = ++cartId;
    this.userId = userId;
    this.productId = productId;
    this.quantity = Number(quantity);
  }
}
const cartItems = [new cartModel(1, 2, 5), new cartModel(3, 3, 10)];

export const addToCart = (userId, productId, quantity) => {
  // Write your code here
  const newItem = new cartModel(userId, productId, quantity);
  cartItems.push(newItem);
  return cartItems;
};

// export const removeFromCart = (userId, cartItemId) => {
//   // Write your code here
//   const index = cartItems.findIndex(
//     (item) => item.userId === userId && item.id === cartItemId
//   );
//   if (index !== -1) {
//     const deletedItem = cartItems[index];
//     cartItems.splice(index, 1); // Remove the item at the found index
//     return deletedItem;
//   } else {
//     throw new Error();
//   }
// };

export const removeFromCart = (userId, cartItemId) => {
  let cartItemInd = cartItems.findIndex((item) => {
    return item.id == cartItemId && item.userId == userId;
  });
  if (cartItemInd >= 0) {
    let itemToDelete = cartItems[cartItemInd];
    cartItems.splice(cartItemInd, 1);
    return { success: true, deletedCartItem: itemToDelete };
  } else {
    return {
      success: false,
      msg: "operation not allowed",
    };
  }
};
