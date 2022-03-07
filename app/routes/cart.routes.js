// const Cart = require("../models/cart.model");
const db = require("../models");
const Cart = db.Cart;

// const {
//   verifyToken,
//   verifyTokenAndAuthorization,
//   verifyTokenAndAdmin,
// } = require("");

// Get

module.exports = (app) => {
  app.get("/Cart", async (req, res) => {
    //   const newCart = new Cart(req.body);

    res.json({
      status: 200,
      message: "My cart",
    });
    // console.log("Cart", Cart);
  });

  //CREATE

  app.post("/", async (req, res) => {
    const newCart = new Cart(req.body);

    try {
      const savedCart = await newCart.save();
      res.status(200).json(savedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //UPDATE
  app.put("/:id", async (req, res) => {
    try {
      const updatedCart = await Cart.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //DELETE
  app.delete("/:id", async (req, res) => {
    try {
      await Cart.findByIdAndDelete(req.params.id);
      res.status(200).json("Cart has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //GET USER CART
  app.get("/find/:userId", async (req, res) => {
    try {
      const cart = await Cart.findOne({ userId: req.params.userId });
      res.status(200).json(cart);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // //GET ALL

  app.get("/", async (req, res) => {
    try {
      const carts = await Cart.find();
      res.status(200).json(carts);
    } catch (err) {
      res.status(500).json(err);
    }
  });
};
