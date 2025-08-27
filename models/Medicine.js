const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  production_date: Date,
  expired_date: Date,
  department: String,
});

module.exports = mongoose.model("Medicine", medicineSchema);
