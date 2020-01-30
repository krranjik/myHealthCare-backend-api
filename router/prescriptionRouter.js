const express = require('express')
const router = express.Router()
const prescription = require("../controllers/prescriptionController")
const upload = require('../middleware/uploadImage');

router.post("/addprescription", upload, prescription.addPrescription)
router.get("/getprescription", prescription.getPrescription)
router.get("/getprescriptionbyid/:_id", prescription.getPrescriptionById)
router.put("/updateprescription/:_id", prescription.updatePrescription)
router.delete("/deleteprescription/:_id", prescription.deletePrescription)

module.exports = router