const express = require('express')
const router = express.Router()
const doctor = require("../controllers/doctorController")

router.post("/registerdoctor", doctor.registerDoctor)
router.get("/getalldoctors", doctor.getDoctor)

module.exports = router