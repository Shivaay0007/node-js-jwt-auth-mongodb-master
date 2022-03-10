// const Cart = require("../models/cart.model");
// const authJwt = require("../middlewares/index");
const { mongoose } = require("../models");
const db = require("../models");
const Cart = db.Cart;
const ObjectId = require("mongodb").ObjectID;

// const {
//   verifyToken,
//   verifyTokenAndAuthorization,
//   verifyTokenAndAdmin,
// } = require("");

// const { authJwt } = require("authJwt");

// Get

module.exports = (app) => {
  app.get("/Cart", async (req, res) => {
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

  app.post("/cart/:uId", async (req, res) => {
    const { productId, quantity, name, price, description } = req.body;

    const id = req.params.id;
    const userId = id; //TODO: the logged in user id
    console.log(userId, "userid is printed");
    try {
      let cart = await Cart.findOne({ userId });
      concole.log("is priented");
      if (cart) {
        //cart exists for user
        let itemIndex = cart.products.findIndex(
          (p) => p.productId == productId
        );

        if (itemIndex > -1) {
          //product exists in the cart, update the quantity
          let productItem = cart.products[itemIndex];
          productItem.quantity = quantity;
          cart.products[itemIndex] = productItem;
        } else {
          //product does not exists in cart, add new item
          cart.products.push({ productId, quantity, name, price, description });
        }
        cart = await cart.save();
        return res.status(201).send(cart);
      } else {
        //no cart for user, create new cart
        const newCart = await Cart.create({
          userId,
          products: [{ productId, quantity, name, price, description }],
        });

        return res.status(201).send(newCart);
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    }
  });

  //UPDATE
  app.put("/Cart/:id", async (req, res) => {
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
