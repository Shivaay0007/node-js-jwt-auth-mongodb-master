const { product } = require("../models/products.model");

module.exports = (app) => {
  const product = require("../controllers/products.controller.js");

  app.get("/product", product.findAll);
};
