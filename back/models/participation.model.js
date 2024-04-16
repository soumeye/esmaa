
const mongoose = require("mongoose");


const participationSchema = new mongoose.Schema({
    nomEquipe: String,
    composition: [String], // Liste des membres de l'équipe
    slogan: String,
    logo: String // URL ou chemin d'accès au fichier du logo
  });
  
const Participation = mongoose.model('Participation', participationSchema);
  
module.exports = Participation;