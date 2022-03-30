const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const CartSchema = mongoose.model(
  "Cart",
  new mongoose.Schema({
    userId: { type: String, required: true },

    products: [
      {
        productId: String,
        quantity: Number,
        name: String,
        price: Number,
        description: String,
      },
    ],
    product: { type: Schema.Types.ObjectId, ref: "Product" },
    active: {
      type: Boolean,
      default: true,
    },
    modifiedOn: {
      type: Date,
      default: Date.now,
    },
  })
);

module.exports = CartSchema;
