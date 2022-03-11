// const Cart = require("../models/cart.model");
// const authJwt = require("../middlewares/index");
const { mongoose } = require("../models");
const db = require("../models");
const Cart = db.Cart;
const AddToCart = require("../controllers/cart.controller");
const FindUserCart = require("../controllers/cart.controller");
const { authJwt } = require("../middlewares/index");

// const {
//   verifyToken,
//   verifyTokenAndAuthorization,
//   verifyTokenAndAdmin,
// } = require("");

// const { authJwt } = require("authJwt");

// Get

module.exports = (app) => {
  app.get("/Cart", [authJwt.verifyToken], async (req, res) => {
    Cart.find({})
      .then((cart) => {
        res.send(cart);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            "Some error occurred while retrieving cart products.",
        });
      });
    //   const newCart = new Cart(req.body);
    // res.json({
    //   status: 200,
    //   message: "My cart",
    // });
    // console.log("Cart", Cart);
  });

  //CREATE

  // app.post("/Cart", async (req, res) => {
  //   const newCart = new Cart(req.body);
  //   try {
  //     const savedCart = await newCart.save();
  //     res.status(200).json(savedCart);
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // });

  app.post("/cart/:id", [authJwt.verifyToken], AddToCart);

  //UPDATE
  app.put("/Cart/:id", [authJwt.verifyToken], async (req, res) => {
    try {
      const updatedCart = await Cart.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body.name,
          $set: req.body.price,
        },
        { new: true }
      );
      res.status(200).json(updatedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //DELETE
  app.delete("/:id", [authJwt.verifyToken], async (req, res) => {
    try {
      await Cart.findByIdAndDelete(req.params.id);
      res.status(200).json("Cart has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //GET USER CART

  app.get("/find/:userId", [authJwt.verifyToken], FindUserCart);

  // //GET ALL

  app.get("/", [authJwt.verifyToken], async (req, res) => {
    try {
      const carts = await Cart.find();
      res.status(200).json(carts);
    } catch (err) {
      res.status(500).json(err);
    }
  });
};
