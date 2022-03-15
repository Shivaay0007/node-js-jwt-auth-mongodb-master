const { authJwt } = require("../middlewares/index");

module.exports = (app) => {
  const payment = require("../controllers/payment.controller");

  app.post("/payment/:id", [authJwt.verifyToken], payment);
};
