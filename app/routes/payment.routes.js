const { authJwt } = require("../middlewares/index");

module.exports = (app) => {
  const PaymentController = require("../controllers/payment.controller");

  app.post("/payment/:id", [authJwt.verifyToken], PaymentController);
};
