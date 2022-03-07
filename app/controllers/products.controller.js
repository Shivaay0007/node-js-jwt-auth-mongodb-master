// const { Product } = require("../models/products.model");
const db = require("../models");
const Product = db.product;

console.log(Product);
exports.findAll = (req, res) => {
  Product.find({})
    .then((product) => {
      res.send(product);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    });
};
