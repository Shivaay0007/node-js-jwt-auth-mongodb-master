const mongoose = require("mongoose");

const CartSchema = mongoose.model(
  "Cart",
  new mongoose.Schema({
    userId: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  })
);

module.exports = CartSchema;
