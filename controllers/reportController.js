const report = require('../models/reportModel')

//add report function

exports.addReport = (req, res) => {
    req.files.map(function (items) {
        const addrep = new report({
            patient_id: req.body.patient_id,
            doctor_id: req.body.doctor_id,
            report_name: req.body.report_name,
            report_date: req.body.report_date,
            report_file: items.filename
        })
        addrep.save().then(function () {
            res.send("Report has been added")
        }).catch(function (e) {
            res.send(e)
        })
    })
}

//select all report function

exports.getReport = (req, res) => {
    const getAllReport = report
        .find().populate('patient_id').populate('doctor_id').then(function (getAllReport) {
            res.send(getAllReport)
        }).catch(function (e) {
            res.send(e)
        })
}

//select report by id function

exports.getReportById = (req, res) => {
    report.findById(req.params._id)
        .then(function (reportById) {
            res.send(reportById)
        }).catch(function (e) {
            res.send(e)
        })
}

//update report function

exports.updateReport = (req, res) => {
    report.findOneAndUpdate(req.params._id, req.body)
        .then(function () {
            res.send("Report has been updated")
        }).catch(function (e) {
            res.send(e)
        })
}

//delete report function

exports.deleteReport = (req, res) => {
    report.findOneAndDelete(req.params._id)
        .then(function () {
            res.send("Report has been deleted")
        }).catch(function (e) {
            res.send(e)
        })
}