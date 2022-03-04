const { product } = require("../models/products.model");
console.log(product);
exports.findAll = (req, res) => {
  product
    .find()
    .then((product) => {
      res.send(product);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving notes.",
      });
    });
};
