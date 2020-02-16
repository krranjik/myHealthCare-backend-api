const express = require('express')
const router = express.Router()
const upload = require('../middleware/uploadImage');
const doctor = require("../controllers/doctorController")
const auth = require("../middleware/userAuth")

//for admin panel
router.post("/registerdoctor", [auth, upload], doctor.registerDoctor)
router.get("/getalldoctors", doctor.getDoctor)
router.get("/getdoctorbyid/:_id", auth, doctor.findDoctorById)
router.put("/updatedoctor/:_id", [auth, upload], doctor.updateDoctor)
router.delete("/deletedoctor/:_id", auth, doctor.deleteDoctor)

//for android application
router.get("/getalldoctor", doctor.getDoctor)
router.get("/getdoctorbyids/:_id", doctor.findDoctorById)

module.exports = router