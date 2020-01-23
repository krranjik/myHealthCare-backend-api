const express = require('express')
const router = express.Router()
const prescription = require("../controllers/prescriptionController")

router.post("/addprescription", prescription.addPrescription)
router.get("/getprescription", prescription.getPrescription)
router.get("/getprescriptionbyid/:_id", prescription.getPrescriptionById)
router.put("/updateprescription/:_id", prescription.updatePrescription)
router.delete("/deleteprescription/:_id", prescription.deletePrescription)

module.exports = router