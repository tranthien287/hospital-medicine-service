const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/MedicineDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" Connected to MedicineDB");
  } catch (err) {
    console.error(" Error connecting to MedicineDB:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
