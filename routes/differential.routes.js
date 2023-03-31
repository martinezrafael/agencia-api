const { Router } = require("express");

const Differential = require("../models/Differential.js");

const router = Router();

router.post("/", async (req, res) => {
  const payload = req.body;
  try {
    const newDifferential = await Differential.create(payload);
    res.status(201).json(newDifferential);
  } catch (error) {
    res.status(500).json({ error: error.messge });
  }
});

router.get("/", async (req, res) => {
  try {
    const allDifferentials = await Differential.find();
    res.status(200).json(allDifferentials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const differential = await Differential.findById(id);
    res.status(200).json(differential);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  try {
    const updatedDifferential = await Differential.findByIdAndUpdate(
      id,
      payload,
      { new: true }
    );
    res.status(200).json(updatedDifferential);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Differential.findByIdAndDelete(id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
