const mongoose = require("mongoose");

const ProductsSchema = mongoose.Schema({
  // name: { type: String },
  // price: { type: Number },
  // image: { type: String },
  // colors: { type: Array },x
  // company: { type: String },
  // description: {
  //   type: String,
  // },
  // productId: { type: String },
  // category: {
  //   type: String,
  // },
});

module.exports = mongoose.model("Product", ProductsSchema);
