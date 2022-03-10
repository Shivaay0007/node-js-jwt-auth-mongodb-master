const db = require("../models");
const Cart = db.Cart;

module.exports = AddToCart = async (req, res) => {
  const { productId, quantity, name, price, description } = req.body;

  const id = req.params.id;
  const userId = id; //TODO: the logged in user id
  console.log(userId, "userid is printed");
  try {
    let cart = await Cart.findOne({ userId });
    console.log("is priented", cart);
    if (cart) {
      //cart exists for user
      let itemIndex = cart.products.findIndex((p) => p.productId == productId);

      if (itemIndex > -1) {
        //product exists in the cart, update the quantity
        let productItem = cart.products[itemIndex];
        productItem.quantity = quantity;
        cart.products[itemIndex] = productItem;
      } else {
        //product does not exists in cart, add new item
        cart.products.push({
          productId,
          quantity,
          name,
          price,
          description,
          userId,
        });
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
};

module.exports = FindUserCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ err });
  }
};
