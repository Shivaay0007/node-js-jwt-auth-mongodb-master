// const { Product } = require("../models/products.model");
const db = require("../models");
const Product = db.product;

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

exports.findById = (req, res) => {
  Product.find({ id: req.params.productId })
    .then((productId) => {
      if (productId) {
        console.log("productId ", productId);
        res.send(productId);
      }
    })
    .catch((err) => {
      console.log("err ", err);
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    });
};
