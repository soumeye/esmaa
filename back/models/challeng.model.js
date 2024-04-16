
const mongoose = require("mongoose");


const challengeSchema = new mongoose.Schema({
    titre: String,
    description: String,
    livrablesAttendus: [String],
    grilleEvaluation: [{
      critere: String,
      poids: Number
    }],
    dateLimite: Date
  });
  
const Challenge = mongoose.model('Challenge', challengeSchema);
  

module.exports = Challenge;