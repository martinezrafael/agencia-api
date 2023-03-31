const { Router } = require("express");

const Team = require("../models/Team.js");

const router = Router();

router.post("/", async (req, res) => {
  const payload = req.body;
  try {
    const newTeam = await Team.create(payload);
    res.status(201).json(newTeam);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const allTeams = await Team.find();
    res.status(200).json(allTeams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const team = await Team.findById(id);
    res.status(200).json(team);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  try {
    const updatedTeam = await Team.findByIdAndUpdate(id, payload, {
      new: true,
    });
    res.status(200).json(updatedTeam);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Team.findByIdAndDelete(id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
