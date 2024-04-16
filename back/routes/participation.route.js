const express = require("express");
const Participation = require("../models/participation.model.js");
const router = express.Router();
const { getParticipations, getParticipation, createParticipation, updateParticipation, deleteParticipation ,calculerTauxDeParticipation} = require('../controllers/participation.controller.js');


router.get('/', getParticipations);

router.get('/', calculerTauxDeParticipation);

router.get("/:id", getParticipation);

router.post("/", createParticipation);

// update a product
router.put("/:id", updateParticipation);

// delete a product
router.delete("/:id", deleteParticipation);

module.exports = router;