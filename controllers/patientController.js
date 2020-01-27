const patient = require("../models/patientModel")

//register patient function

exports.registerPatient = (req, res) => {
    console.log(req.body)
    const register = new patient(req.body)
    register.save().then(function () {
        res.send("Patient has been registered")

    }).catch(function (e) {
        res.send(e)
    })
}

//select all patient function

exports.getPatient = (req, res) => {
    const getAllPatient = patient
        .find().then(function (getAllPatient) {
            res.send(getAllPatient)
        }).catch(function (e) {
            res.send(e)
        })
}

//select patient by id function

exports.findPatientById = (req, res) => {
    patient.findById(req.params._id)
        .then(function (patientById) {
            res.send(patientById)
        }).catch(function (e) {
            res.send(e)
        })
}

//update patient function

exports.updatePatient = (req, res) => {
    patient.findOneAndUpdate(req.params._id, req.body)
        .then(function () {
            res.send("Patient has been updated successfully")
        }).catch(function (e) {
            res.send(e)
        })
}

//delete patient function

exports.deletePatient = (req, res) => {
    patient.findOneAndDelete(req.params._id)
        .then(function () {
            res.send("Patient has been deleted")
        }).catch(function (e) {
            res.send(e)
        })
}

//login function

exports.patientLogin = async (req, res) => {


    try {
        const patient1 = await patient.checkCrediantialsDb(req.body.username,
            req.body.password)
        const token = await patient1.generateAuthToken()
        const name = await patient1.name;
        res.send({ name, token })
    }
    catch (e) {
        res.status(400).send()
    }
}   