const express = require('express')
const router = express.Router()
const report = require("../controllers/reportController")
const upload = require('../middleware/uploadImage');

router.post("/addreport", upload, report.addReport)
router.get("/getreport", report.getReport)
router.get("/getreportbyid/:_id", report.getReportById)
router.put("/updatereport/:_id", upload, report.updateReport)
router.delete("/deletereport/:_id", report.deleteReport)

module.exports = router