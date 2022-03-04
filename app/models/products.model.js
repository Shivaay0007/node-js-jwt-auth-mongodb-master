const mongoose = require("mongoose");

const ProductsSchema = mongoose.Schema({
  id: { type: String },
  name: { type: String },
  price: { type: Number },
  image: { type: String },
  colors: { type: Array },
  company: { type: String },
  description:
    "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  category: "office",
});

module.exports = mongoose.model("Product", ProductsSchema);
