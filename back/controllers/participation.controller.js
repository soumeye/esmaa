const Participation = require("../models/participation.model");
const Equipe = require("../models/group.model");


const getParticipations = async (req, res) => {
    try {
      const participations = await Participation.find({});
      res.status(200).json(participations);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};
  

const getParticipation = async (req, res) => {
    try {
      const { id } = req.params;
      const participation = await Participation.findById(id);
      res.status(200).json(participation);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};
  

const createParticipation = async (req, res) => {
    try {
      const participation = await Participation.create(req.body);
      res.status(200).json(participation);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  const updateParticipation = async (req, res) => {
    try {
      const { id } = req.params;
  
      const participation = await Participation.findByIdAndUpdate(id, req.body);
  
      if (!participation) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      const updatedParticiption = await Participation.findById(id);
      res.status(200).json(updatedParticiption);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};
  

const deleteParticipation = async (req, res) => {
    try {
      const { id } = req.params;
  
      const particiption = await Participation.findByIdAndDelete(id);
  
      if (!particiption) {
        return res.status(404).json({ message: "participation not found" });
      }
  
      res.status(200).json({ message: "participation deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};


async function calculerTauxDeParticipation(req, res) {
  try {
    // Compter le nombre total d'équipes prévues
    const totalEquipesPrevues = await Equipe.countDocuments();
      
    // Compter le nombre d'équipes enregistrées dans la base de données
    const nombreEquipesEnregistrees = await Participation.countDocuments();

    // Calculer le taux de participation
    const tauxDeParticipation = (nombreEquipesEnregistrees / totalEquipesPrevues) * 100;

    // Retourner les résultats en JSON
    const resutlat = {
      totalEquipesPrevues: totalEquipesPrevues,
      nombreEquipesEnregistrees: nombreEquipesEnregistrees,
      tauxDeParticipation: tauxDeParticipation.toFixed(2) + '%'
    };
    res.status(200).json(resutlat)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}



  

module.exports = {
    getParticipations,
    getParticipation,
    createParticipation,
    updateParticipation,
  deleteParticipation,
  calculerTauxDeParticipation,
    
}
