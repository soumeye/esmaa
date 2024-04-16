const Soumission = require("../models/Soumission.model");


const multer = require('multer');

// Configuration du stockage pour les fichiers téléchargés
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // Assurez-vous que ce dossier existe dans votre projet
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop())
  }
});

const upload = multer({ storage: storage });





const getSoumissions = async (req, res) => {
    try {
      const soumissions = await Soumission.find({});
      res.status(200).json(soumissions);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const getSoumission = async (req, res) => {
    try {
      const { id } = req.params;
      const soumission = await Soumission.findById(id);
      res.status(200).json(soumission);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const createSoumission = async (req, res) => {
    try {
      // Ajouter des informations sur les fichiers uploadés à l'objet de requête, si nécessaire
      let filePaths = req.files.map(file => file.path); // Récupère les chemins des fichiers stockés
  
      // Créez une nouvelle soumission en incluant les chemins des fichiers
      const soumissionData = {
        ...req.body,
        livrables: filePaths // Ajoutez les chemins des fichiers au document si nécessaire
      };
  
      const soumission = await Soumission.create(soumissionData);
      res.status(200).json(soumission);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  
  const updateSoumission = async (req, res) => {
    try {
      const { id } = req.params;
  
      const soumission = await Soumission.findByIdAndUpdate(id, req.body);
  
      if (!soumission) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      const updatedSoumission = await Soumission.findById(id);
      res.status(200).json(updatedSoumission);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const deleteSoumission = async (req, res) => {
    try {
      const { id } = req.params;

      const soumission = await Soumission.findByIdAndDelete(id);
  
      if (!soumission) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};
  

module.exports = {
    getSoumission,
    getSoumissions,
    updateSoumission,
    deleteSoumission,
  createSoumission,
  upload,
}