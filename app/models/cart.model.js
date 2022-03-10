const mongoose = require("mongoose");

const CartSchema = mongoose.model(
  "Cart",
  new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    // product: [
    //   {
    //     qunantity: String,
    //     name: String,
    //     price: Number,
    //   },
    // ],
    products: [
      {
        productId: String,
        quantity: Number,
        name: String,
        price: Number,
        description: String,
      },
    ],
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
