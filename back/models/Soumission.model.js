const mongoose = require("mongoose");




const soumissionSchema = new mongoose.Schema({
    challengeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'challeng'
    },
    equipeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'group'
    },
    livrables: [String],
    dateSoumission: Date
});



  
const Soumission = mongoose.model('Soumission', soumissionSchema);
  

module.exports = Soumission;