const express = require("express");
const Participant = require("../models/participant.model");
const router = express.Router();

// Route POST pour ajouter un nouveau participant
router.post("/", async (req, res) => {
  try {
    const { name, email, group, Matricule } = req.body;

    // Créer une nouvelle instance de participant
    const participant = new Participant({
      name,
      email,
      group,
      Matricule
      // Ajouter d'autres champs au besoin
    });

    // Enregistrer le participant dans la base de données
    await participant.save();

    res.status(201).json(participant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route PUT pour mettre à jour un participant par son matricule
router.put("/:Matricule", async (req, res) => {
  const Matricule = req.params.Matricule;
  const { name, email, group } = req.body;

  try {
    // Recherche du participant par son matricule unique
    const participant = await Participant.findOne({ Matricule });

    if (!participant) {
      return res.status(404).json({ message: "Participant not found" });
    }

    // Mettre à jour les champs du participant
    participant.name = name;
    participant.email = email;
    participant.group = group;

    // Enregistrer les modifications dans la base de données
    await participant.save();

    res.json(participant); // Retourner le participant mis à jour
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route DELETE pour supprimer un participant par son matricule
router.delete("/:Matricule", async (req, res) => {
  const Matricule = req.params.Matricule;

  try {
    // Recherche et suppression du participant par son matricule unique
    const deletedParticipant = await Participant.findOneAndDelete({ Matricule });

    if (!deletedParticipant) {
      return res.status(404).json({ message: "Participant not found" });
    }

    res.json({ message: "Participant deleted successfully", deletedParticipant });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
