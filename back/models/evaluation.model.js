const mongoose = require("mongoose");


const evaluationSchema = new mongoose.Schema({
    soumissionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Soumission'
    },
    juryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Utilisateur'
    },
    notes: [{
      critere: String,
      note: Number
    }],
    commentaire: String
  });
  
const Evaluation = mongoose.model('Evaluation', evaluationSchema);
  
module.exports = Evaluation;
  