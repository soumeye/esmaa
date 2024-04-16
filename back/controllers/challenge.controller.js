const Challenge = require("../models/challeng.model");

const multer = require('multer');

// Configuration du stockage pour les fichiers téléchargés
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/challenges') // Assurez-vous que ce dossier existe dans votre projet
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop())
  }
});

const upload = multer({ storage: storage });


const getChallenges = async (req, res) => {
    try {
      const challenges = await Challenge.find({});
      res.status(200).json(challenges);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

  const getChallenge = async (req, res) => {
    try {
      const { id } = req.params;
      const challenge = await Challenge.findById(id);
      res.status(200).json(challenge);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};
  

const createChallenge = async (req, res) => {
  try {
      
    let filePaths = req.files.map(file => file.path); // Récupère les chemins des fichiers stockés
  
      // Créez une nouvelle soumission en incluant les chemins des fichiers
      const soumissionData = {
        ...req.body,
        livrablesAttendus: filePaths // Ajoutez les chemins des fichiers au document si nécessaire
    };
    
      const challenge = await Challenge.create(req.body);
      res.status(200).json(challenge);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};
  

const updatechallenge= async (req, res) => {
    try {
      const { id } = req.params;
  
      const challenge = await Challenge.findByIdAndUpdate(id, req.body);
  
      if (!challenge) {
        return res.status(404).json({ message: "challenge not found" });
      }
  
      const updatedChallenge = await Product.findById(id);
      res.status(200).json(updatedChallenge);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};
  

const deleteChallenge = async (req, res) => {
    try {
      const { id } = req.params;
  
      const challenge = await Challenge.findByIdAndDelete(id);
  
      if (!challenge) {
        return res.status(404).json({ message: "challenge not found" });
      }
  
      res.status(200).json({ message: "challenge deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};
  

module.exports = {
    getChallenges,
    getChallenge,
    createChallenge,
    updatechallenge,
  deleteChallenge,
    upload,
}