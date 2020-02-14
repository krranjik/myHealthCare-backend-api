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
        .find().populate('patient_id').populate('doctor_id').then(function (getAllPres) {
            res.send(getAllPres)
        }).catch(function (e) {
            res.send(e)
        })
}

//select prescription by id function

exports.getPrescriptionById = (req, res) => {
    prescription.find({patient_id:req.params._id}).populate('patient_id')
        .then(function (presById) {
            res.send(presById)
        }).catch(function (e) {
            res.send(e)
        })
}

//update prescription function

exports.updatePrescription = (req, res) => {

    req.files.map(function (items) {
        const updpres = {
            patient_id: req.body.patient_id,
            doctor_id: req.body.doctor_id,
            prescription_name: req.body.prescription_name,
            prescription_file: items.filename
        }

        prescription.findByIdAndUpdate(req.params._id, updpres)
            .then(function () {
                res.send("Prescription has been updated")
            }).catch(function (e) {
                res.send(e)
            })
    })
}

//delete prescription function

exports.deletePrescription = (req, res) => {
    prescription.findByIdAndDelete(req.params._id)
        .then(function () {
            res.send("Prescription has been deleted")
        }).catch(function (e) {
            res.send(e)
        })
}