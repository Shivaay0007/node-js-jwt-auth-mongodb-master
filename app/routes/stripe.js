const stripe = require("stripe")(
  "sk_test_51Kb08kSE09Ou9OF5MVKh4v6T2yxbGn4akUJ4xNHS5nUAKgbNsW3sut9JVLIJO8EBZlBBL3QUpKJSiUFSphdKpeec00LXFzTKUJ"
);

module.exports = (app) => {
  app.post("/payment", (req, res) => {
    stripe.charges.create(
      {
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
      },
      (stripeErr, stripeRes) => {
        if (stripeErr) {
          res.status(500).json(stripeErr);
        } else {
          res.status(200).json(stripeRes);
        }
      }
    );
    // console.log(stripe);
    // res.json({
    //   status: 200,
    //   message: "My Payment is Successfull...",
    // });
  });
};
