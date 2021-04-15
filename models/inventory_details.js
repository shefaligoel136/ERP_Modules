const mongoose = require("mongoose");

const inventory_details_Schema = new mongoose.Schema(
  {
    name: String,
    description: String,
    brand: String,
    price: String,
    stock: String
  },
  {
    timestamps: true
  }
);

const inventory_details = mongoose.model(
  "inventory_details",
  inventory_details_Schema
);
module.exports = inventory_details;
