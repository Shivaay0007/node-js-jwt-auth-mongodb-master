const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.Cart = require("./cart.model");
db.product = require("./products.model");
db.user = require("./user.model");
db.role = require("./role.model");

db.ROLES = ["user"];

module.exports = db;
