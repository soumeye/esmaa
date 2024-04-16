const express = require("express");
const Utilisateur = require("../models/utilisateur.model.js");
const router = express.Router();
const { createutilisateur,getUtilisateurs,updateUtilisateur,deleteUtilisateur } = require('../controllers/utilisateur.controller.js');



router.post('/', createutilisateur);
router.get('/', getUtilisateurs);
router.put('/:id', updateUtilisateur);
router.delete('/:id', deleteUtilisateur);

module.exports = router;