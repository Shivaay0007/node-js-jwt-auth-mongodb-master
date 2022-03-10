const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: "rzp_test_zIUsPykcjYEZHO",
  key_secret: "ATcw3hHemufOVv9r6i5twsN0",
});

const RazorPayCall = (app) => {
  app.get("/pay", async (req, res) => {
    const options = {
      amount: 1000,
      currency: "INR",
      receipt: "this is a new payment by Chandan", //any unique id
    };

    try {
      const response = await razorpay.orders.create(options);
      res.json({
        order_id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send("Unable to create order");
    }
  });

  app.post("/pay-verify", async (req, res) => {
    console.log("req.body line 26 , razorPay ", req.body);
    body = req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;
    const crypto = require("crypto");
    const expectedSignature = crypto
      .createHmac("sha256", "ATcw3hHemufOVv9r6i5twsN0")
      .update(body.toString())
      .digest("hex");
    // console.log("sig" + req.body.razorpay_signature);
    // console.log("sig" + expectedSignature);

    if (expectedSignature === req.body.razorpay_signature) {
      console.log("Payment Success");
    } else {
      console.log("Payment Fail");
    }
  });
};

module.exports = RazorPayCall;
