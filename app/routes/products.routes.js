const { product } = require("../models/index.js");

module.exports = (app) => {
  const product = require("../controllers/products.controller.js");

  app.get("/product", product.findAll);
};
