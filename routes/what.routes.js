const { Router } = require("express");

const What = require("../models/What.js");

const router = Router();

router.post("/", async (req, res) => {
  const payload = req.body;
  try {
    const newWhat = await What.create(payload);
    res.status(201).json(newWhat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const allWhats = await What.find();
    res.status(200).json(allWhats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const what = await What.findById(id);
    res.status(200).json(what);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  try {
    const updatedWhat = await What.findByIdAndUpdate(id, payload, {
      new: true,
    });
    res.status(200).json(updatedWhat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await What.findByIdAndDelete(id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
