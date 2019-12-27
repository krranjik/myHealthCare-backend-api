const express = require('express')
const router = express.Router()
const appointment = require("../controllers/appointmentController")

router.post("/addappointment", appointment.addAppointment)
router.get("/getallappointment", appointment.getAppointment)
router.get("/getappointmentbyid/:_id", appointment.getAppointmentById)
router.put("/updateappointment/:_id", appointment.updateAppointment)
router.delete("/deleteappointment/:_id", appointment.deleteAppointment)

module.exports = router