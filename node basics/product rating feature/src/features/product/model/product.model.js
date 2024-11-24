// Please don't change the pre-written code
// Import the necessary modules here

let id = 3;
const products = [
  { id: 1, name: "iphone", price: 100000 },
  { id: 2, name: "oneplus", price: 50000 },
  { id: 3, name: "samsung", price: 60000 },
];

export const fetchAllProducts = () => {
  return products;
};

export const rateProductModel = (productId, userId, rating) => {
  // Write your code here
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    product.ratings = [...(product.ratings ?? [])];
    // if (product.id == productId) {
    //   product.ratings.push({ userId: userId, rating });
    //   return { success: true, msg: { product } };
    // }
    if (product.id == productId) {
      // Check if the user has already rated the product
      let existingRating = product.ratings.find((r) => r.userId == userId);

      if (existingRating) {
        // Update the existing rating
        existingRating.rating = rating;
      } else {
        // Add a new rating if the user has not rated the product yet
        product.ratings.push({ userId: userId, rating });
      }

      return { success: true, msg: { product } };
    }
  }
};
