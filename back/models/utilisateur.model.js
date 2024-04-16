const mongoose = require("mongoose");


const utilisateurSchema = new mongoose.Schema({
    nom: String,
    email: String,
    role: {
      type: String,
      enum: ['Jury', 'admin', 'participant'], // Définir les rôles disponibles
      default: 'participant'
    },
    droitsAcces: {
      peutVoter: Boolean,
      peutModifier: Boolean,
      peutSupprimer: Boolean
    }
  });
  
const Utilisateur = mongoose.model('Utilisateur', utilisateurSchema);
module.exports = Utilisateur;