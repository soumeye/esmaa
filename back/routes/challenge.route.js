const express = require("express");
const Challenge = require("../models/challeng.model.js");
const router = express.Router();
const {getChallenges,
    getChallenge,
    createChallenge,
    updatechallenge,
    upload,
    deleteChallenge,} = require('../controllers/challenge.controller.js');



    router.get('/', getChallenges);
    router.get("/:id", getChallenge);
    
    router.post("/",upload.array('livrablesAttendus', 5), createChallenge);
    
    // update a product
    router.put("/:id", updatechallenge);
    
    // delete a product
    router.delete("/:id", deleteChallenge);
    
    
    
    
    module.exports = router;