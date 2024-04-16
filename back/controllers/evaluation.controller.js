const Evaluation = require("../models/evaluation.model");

const getEvaluations = async (req, res) => {
  try {
    const evaluations = await Evaluation.find({});
    res.status(200).json(evaluations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEvaluation = async (req, res) => {
  try {
    const { id } = req.params;
    const evaluation = await Evaluation.findById(id);
    res.status(200).json(evaluation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createEvaluation = async (req, res) => {
  try {
    const product = await Evaluation.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateEvaluation = async (req, res) => {
  try {
    const { id } = req.params;

    const evaluation = await Evaluation.findByIdAndUpdate(id, req.body);

    if (!evaluation) {
      return res.status(404).json({ message: "evaluation not found" });
    }

    const updatedEvaluation = await Evaluation.findById(id);
    res.status(200).json(updatedEvaluation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteEvaluation = async (req, res) => {
  try {
    const { id } = req.params;

    const evaluation = await Evaluation.findByIdAndDelete(id);

    if (!evaluation) {
      return res.status(404).json({ message: "evaluation not found" });
    }

    res.status(200).json({ message: "evaluation deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getEvaluations,
  getEvaluation,
  createEvaluation,
  updateEvaluation,
  deleteEvaluation,
};
