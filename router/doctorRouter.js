const express = require('express')
const router = express.Router()
const doctor = require("../controllers/doctorController")

router.post("/registerdoctor", doctor.registerDoctor)
router.get("/getalldoctors", doctor.getDoctor)
router.get("/getdoctorbyid/:_id", doctor.findDoctorById)
router.put("/updatedoctor/:_id", doctor.updateDoctor)
router.delete("/deletedoctor/:_id", doctor.deleteDoctor)

module.exports = router