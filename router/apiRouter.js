// Initialize express router
const express = require('express');
const router = new express.Router();
const bodyParser = require('body-parser');
const auth = require('../middleware/auth');

router.use(bodyParser.urlencoded({ extended: false }));

//Calling Controllers
const loginController = require("../controllers/loginController");
const appointment = require("../controllers/appointmentController");
const doctor = require("../controllers/doctorController");
const patient = require('../controllers/patientController');
const prescription = require("../controllers/prescriptionController");
const report = require("../controllers/reportController")

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});

//Login Routers
router.post("/login",loginController.login)
router.get("/logout",loginController.logout)

//Appointment Routers
router.post("/addappointment", appointment.addAppointment)
router.get("/getallappointment", appointment.getAppointment)
router.get("/getappointmentbyid/:_id", appointment.getAppointmentById)
router.put("/updateappointment/:_id", appointment.updateAppointment)
router.delete("/deleteappointment/:_id", appointment.deleteAppointment)

//Doctor Routers
router.post("/registerdoctor", doctor.registerDoctor)
router.get("/getalldoctors", doctor.getDoctor)
router.get("/getdoctorbyid/:_id", doctor.findDoctorById)
router.put("/updatedoctor/:_id", doctor.updateDoctor)
router.delete("/deletedoctor/:_id", doctor.deleteDoctor)

//Patient Routers
router.post("/registerpatient", patient.registerPatient)
router.get("/getallpatients", patient.getPatient)
router.get("/findpatientbyid/:_id", patient.findPatientById)
router.put("/updatepatient/:_id", patient.updatePatient)
router.delete("/deletepatient/:_id", patient.deletePatient)

//Prescription Routers
router.post("/addprescription", prescription.addPrescription)
router.get("/getprescription", prescription.getPrescription)
router.get("/getprescriptionbyid/:_id", prescription.getPrescriptionById)
router.put("/updateprescription/:_id", prescription.updatePrescription)
router.delete("/deleteprescription/:_id", prescription.deletePrescription)

//Report Routers
router.post("/addreport", report.addReport)
router.get("/getreport", report.getReport)
router.get("/getreportbyid/:_id", report.getReportById)
router.put("/updatereport/:_id", report.updateReport)
router.delete("/deletereport/:_id", report.deleteReport)

// Export API routes
module.exports = router;