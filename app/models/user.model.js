const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
    Cart: [
      {
        pro_id: { type: String },
        pro_name: { type: String },
        pro_price: { type: Number },
      },
    ],
  })
);

module.exports = User;
