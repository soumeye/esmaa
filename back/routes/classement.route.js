const express = require("express");
const router = express.Router();
const { calculerScoresDesEquipes } = require('../controllers/classement.controller.js');



router.get('/', async (req, res) => {
    try {
        const classement = await calculerScoresDesEquipes();
        res.json(classement);
    } catch (error) {
        res.status(500).send("Erreur lors de la récupération du classement des équipes");
    }
});


    
module.exports = router;