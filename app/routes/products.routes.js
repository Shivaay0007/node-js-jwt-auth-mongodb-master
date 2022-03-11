const { product } = require("../models/products.model");
const { authJwt } = require("../middlewares/index");

module.exports = (app) => {
  const product = require("../controllers/products.controller.js");

  app.get("/product", [authJwt.verifyToken], product.findAll);
};
