const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth')
const patient = require('../controllers/patientController');

router.post("/registerpatient", patient.registerPatient)
router.get("/getallpatients", patient.getPatient)
router.get("/findpatientbyid/:_id", patient.findPatientById)
router.put("/updatepatient/:_id", patient.updatePatient)
router.delete("/deletepatient/:_id", patient.deletePatient)
router.get("/authorize", auth, function (req, res) {

})

module.exports = router