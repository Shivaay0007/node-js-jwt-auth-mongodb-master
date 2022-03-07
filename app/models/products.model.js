const mongoose = require("mongoose");

const ProductsSchema = mongoose.Schema(
  {
    id: { type: String },
    name: { type: String },
    price: { type: Number },
    image: { type: String },
    colors: { type: Array },
    company: { type: String },
    description: { type: String },
    category: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", ProductsSchema);
