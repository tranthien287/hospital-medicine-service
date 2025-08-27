const express = require("express");
const Medicine = require("../models/Medicine");
const router = express.Router();

// Thêm thuốc
router.post("/", async (req, res) => {
  try {
    const medicine = await Medicine.create(req.body);
    res.status(201).json(medicine);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Lấy danh sách thuốc
router.get("/", async (req, res) => {
  const medicines = await Medicine.find();
  res.json(medicines);
});

// Lấy chi tiết thuốc
router.get("/:id", async (req, res) => {
  const medicine = await Medicine.findById(req.params.id);
  if (!medicine) return res.status(404).json({ error: "Not found" });
  res.json(medicine);
});

// Cập nhật thuốc
router.put("/:id", async (req, res) => {
  try {
    const medicine = await Medicine.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(medicine);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Xóa thuốc
router.delete("/:id", async (req, res) => {
  await Medicine.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
