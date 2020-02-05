const express = require('express')
const router = express.Router();
const patient = require('../controllers/patientController');
const upload = require('../middleware/uploadImage');
const patientAuth = require('../middleware/patientAuth');

router.post("/registerpatient", upload, patient.registerPatient)
router.post("/addpatient", patient.addPatient)
router.get("/getallpatients", patient.getPatient)
router.get("/findpatientbyid/:_id", patient.findPatientById)
router.put("/updatepatient/:_id", upload, patient.updatePatient)
router.delete("/deletepatient/:_id", patient.deletePatient)
router.post("/patientlogin", patient.patientLogin)

module.exports = router