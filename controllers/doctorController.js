const doctor = require('../models/doctorModel')

//doctor register function

exports.registerDoctor = (req, res) => {
    const regDoctor = new doctor(req.body)
    regDoctor.save().then(function () {
        res.send("Doctor has been added successfully")

    }).catch(function (e) {
        res.send(e)
    })
}

//select all doctor function

exports.getDoctor = (req, res) => {
    const getAllDoctor = doctor
        .find().then(function (getAllDoctor) {
            res.send(getAllDoctor)
        }).catch(function (e) {
            res.send(e)
        })
}

//select doctor by id function
exports.findDoctorById = (req, res) => {
    doctor.findById(req.params._id)
        .then(function (doctorById) {
            res.send(doctorById)
        }).catch(function (e) {
            res.send(e)
        })
}

//update doctor function
exports.updateDoctor = (req, res) => {
    doctor.findOneAndUpdate(req.params._id, req.body)
        .then(function () {
            res.send("Doctor has been updated")
        }).catch(function (e) {
            res.send(e)
        })
}
//delete doctor function
exports.deleteDoctor = (req, res) => {
    doctor.findOneAndDelete(req.params._id, req.body)
        .then(function () {
            res.send("Doctor has been deleted")
        }).catch(function (e) {
            res.send(e)
        })
}