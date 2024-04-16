const express = require("express");
const Soumission = require("../models/Soumission.model.js");
const router = express.Router();
const {
    getSoumission,
    getSoumissions,
    updateSoumission,
    deleteSoumission,
    createSoumission,
    upload,
} = require('../controllers/soumission.controller.js');




router.get('/', getSoumissions);
router.get("/:id", getSoumission);

router.post('/', upload.array('livrables', 5), createSoumission);

// update a product
router.put("/:id", updateSoumission);

// delete a product
router.delete("/:id", deleteSoumission);




module.exports = router;