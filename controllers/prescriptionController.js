const prescription = require('../models/prescriptionModel')

//add prescription function
exports.addPrescription = (req, res) => {
    const addPres = new prescription(req.body)
    addPres.save().then(function () {
        res.send("Prescription has been added")
    }).catch(function (e) {
        res.send(e)
    })
}

//select all prescription function
exports.getPrescription = (req, res) => {
    const getAllPres = prescription
        .find().then(function (getAllPres) {
            res.send(getAllPres)
        }).catch(function (e) {
            res.send(e)
        })
}

//select prescription by id function
exports.getPrescriptionById = (req, res) => {
    prescription.findById(req.params._id)
        .then(function (presById) {
            res.send(presById)
        }).catch(function (e) {
            res.send(e)
        })
}

//update prescription function
exports.updatePrescription = (req, res) => {
    prescription.findOneAndUpdate(req.params._id, req.body)
        .then(function () {
            res.send("Prescription has been updated")
        }).catch(function (e) {
            res.send(e)
        })
}

//delete prescription function
exports.deletePrescription = (req, res) => {
    prescription.findOneAndDelete(req.params._id)
        .then(function () {
            res.send("Prescription has been deleted")
        }).catch(function (e) {
            res.send(e)
        })
}