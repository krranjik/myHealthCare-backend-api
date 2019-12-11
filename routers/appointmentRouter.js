const express = require('express')
const router = express.Router()
const appointment = require("../controllers/appointmentController")

router.post("/addappointment", appointment.addAppointment)
router.get("/getappointment", appointment.getAppointment)