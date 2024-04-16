const express = require("express");
const Evaluation = require("../models/evaluation.model.js");
const router = express.Router();
const {
    getEvaluations,
    getEvaluation,
    createEvaluation,
    updateEvaluation,
    deleteEvaluation,
  } = require('../controllers/evaluation.controller.js');


router.get('/', getEvaluations);
router.get("/:id", getEvaluation);

router.post("/", createEvaluation);

// update a product
router.put("/:id", updateEvaluation);

// delete a product
router.delete("/:id", deleteEvaluation);




module.exports = router;