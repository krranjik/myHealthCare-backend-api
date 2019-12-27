const report = require('../models/reportModel')

//add report function
exports.addReport = (req, res) => {
    const addrep = new report(req.body)
    addrep.save().then(function () {
        res.send("Report has been added")
    }).catch(function (e) {
        res.send(e)
    })
}

//select all report function
exports.getReport = (req, res) => {
    const getAllReport = report
        .find().then(function (getAllReport) {
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