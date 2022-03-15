const mongoose = require("mongoose");

const PaymentSchema = mongoose.Schema({
  userId: { type: String, required: true },
  productId: { type: String, required: true },
  cartId: { type: String, required: true },
  paymentId: { type: String, required: true },
});

module.exports = mongoose.model("Payment", PaymentSchema);
