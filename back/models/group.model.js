const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  etat:Boolean,
  description: {
    type: String
  },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Participant' }]
  // Vous pouvez ajouter d'autres champs au besoin
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
