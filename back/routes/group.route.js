const express = require("express");
const Group = require("../models/group.model");
const Utilisateur = require("../models/utilisateur.model");
const router = express.Router();




router.post('/utilisateurs', async (req, res) => {
  const { nom, email, role, droitsAcces } = req.body;
  try {
    const nouvelUtilisateur = new Utilisateur({ nom, email, role, droitsAcces });
    await nouvelUtilisateur.save();
    res.status(201).send('Utilisateur créé avec succès');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// POST route pour créer un nouveau groupe
router.post("/", async (req, res) => {
  try {
    const { name, description, members } = req.body;

    // Créer une nouvelle instance de groupe
    const group = new Group({
      name,
      description,
      members
    });

    // Enregistrer le groupe dans la base de données
    await group.save();

    res.status(201).json(group);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET route pour récupérer tous les groupes
router.get("/", async (req, res) => {
  try {
    const groups = await Group.find();
    res.json(groups);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



// PUT route pour mettre à jour un groupe par son nom
router.put("/:groupName", async (req, res) => {
  const groupName = req.params.groupName;
  const { description, members } = req.body;

  try {
    // Recherche du groupe par son nom
    const group = await Group.findOne({ name: groupName });

    if (!group) {
      return res.status(404).json({ message: "Group not found" });
    }

    // Mettre à jour la description du groupe si fournie
    if (description) {
      group.description = description;
    }

    // Mettre à jour les membres du groupe si fournis
    if (members) {
      group.members = members;
    }

    // Enregistrer les modifications dans la base de données
    await group.save();

    res.json(group); // Retourner le groupe mis à jour
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE route pour supprimer un groupe par son nom
router.delete("/:groupName", async (req, res) => {
  const groupName = req.params.groupName;

  try {
    // Recherche et suppression du groupe par son nom
    const deletedGroup = await Group.findOneAndDelete({ name: groupName });

    if (!deletedGroup) {
      return res.status(404).json({ message: "Group not found" });
    }

    res.json({ message: "Group deleted successfully", deletedGroup });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
