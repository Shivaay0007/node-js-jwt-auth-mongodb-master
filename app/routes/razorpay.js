const express = require("express");
const Razorpay = require("razorpay");

const instance = new Razorpay({
  key_id: "rzp_test_zIUsPykcjYEZHO",
  key_secret: "ATcw3hHemufOVv9r6i5twsN0",
});

module.exports = (app) => {
  app.get("/", async (req, res) => {
    const options = {
      amount: 600 * 10,
      currency: "INR",
    };
    instance.orders.create(options, function (err, order) {
      if (err) {
        console.log(err);
      } else {
        console.log(order);
        res.render("checkout", { amount: order.amount, order_id: order.id });
      }
    });
  });
  console.log(app);
  app.post("/pay-verify", async (req, res) => {
    console.log(req.body);
    body = req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;
    const crypto = require("crypto");
    const expectedSignature = crypto
      .createHmac("sha256", "ATcw3hHemufOVv9r6i5twsN0")
      .update(body.toString())
      .digest("hex");
    console.log("sig" + req.body.razorpay_signature);
    console.log("sig" + expectedSignature);

    if (expectedSignature === req.body.razorpay_signature) {
      console.log("Payment Success");
    } else {
      console.log("Payment Fail");
    }
  });
};
// module.exports = app;
