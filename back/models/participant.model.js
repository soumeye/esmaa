const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema({
    Matricule: {
        type: String,
        required: true,
        unique: true

      },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  group: {
    type: String,
    required: true,

  }

});

const Participant = mongoose.model("Participant", participantSchema);

module.exports = Participant;



