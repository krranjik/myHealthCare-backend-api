const express = require('express')
const router = express.Router()
const upload = require('../controllers/uploadImage');
const doctor = require("../controllers/doctorController")

router.post("/registerdoctor", upload, doctor.registerDoctor)
router.get("/getalldoctors", doctor.getDoctor)
router.get("/getdoctorbyid/:_id", doctor.findDoctorById)
router.put("/updatedoctor/:_id", doctor.updateDoctor)
router.delete("/deletedoctor/:_id", doctor.deleteDoctor)

module.exports = router