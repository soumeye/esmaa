const express = require("express");
const router = express.Router();
const { calculerTauxDeParticipation} = require('../controllers/participation.controller.js');



router.get('/', calculerTauxDeParticipation);



module.exports = router;