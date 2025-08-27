const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const medicineRoutes = require("./routes/medicineRoutes");

const app = express();
app.use(express.json());

app.use("/api/medicines", medicineRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MedicineDB");
    app.listen(process.env.PORT, () => {
      console.log(` Medicine Service running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.error(" DB Connection Error:", err));
