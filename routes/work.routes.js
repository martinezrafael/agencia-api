const { Router } = require("express");

const Work = require("../models/Work.js");

const router = Router();

router.post("/", async (req, res) => {
  const payload = req.body;
  try {
    const newWork = await Work.create(payload);
    res.status(201).json(newWork);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const allWorks = await Work.find();
    res.status(200).json(allWorks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const work = await Work.findById(id);
    res.status(200).json(work);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  try {
    const updatedWork = await Work.findByIdAndUpdate(id, payload, {
      new: true,
    });
    res.status(200).json(updatedWork);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Work.findByIdAndDelete(id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
