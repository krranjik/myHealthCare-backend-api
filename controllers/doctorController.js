const doctor = require('../models/doctorModel')

//doctor register function

exports.registerDoctor = (req, res) => {
    req.files.map(function (items) {
        const regDoctor = new doctor({
            name: req.body.name,
            gender: req.body.gender,
            department: req.body.department,
            phone: req.body.phone,
            description: req.body.description,
            location: req.body.location,
            rating: req.body.rating,
            image: items.filename,
        })
        regDoctor.save().then(function () {
            res.send("Doctor has been added successfully")

        }).catch(function (e) {
            res.send(e)
        })
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

    console.log(req.params._id)
    doctor.findById(req.params._id)
        .then(function (doctorById) {
            res.send(doctorById)
        }).catch(function (e) {
            res.send(e)
        })
}

//update doctor function

exports.updateDoctor = (req, res) => {
    req.files.map(function (items) {
        const updoctor = {
            name: req.body.name,
            gender: req.body.gender,
            department: req.body.department,
            phone: req.body.phone,
            description: req.body.description,
            location: req.body.location,
            rating: req.body.rating,
            image: items.filename,
        }
        doctor.findByIdAndUpdate(req.params._id, updoctor)
            .then(function () {
                res.send("Doctor has been updated")
            }).catch(function (e) {
                res.send(e)
            })
    })
}

//delete doctor function

exports.deleteDoctor = (req, res) => {
    doctor.findByIdAndDelete(req.params._id)
        .then(function () {
            res.send("Doctor has been deleted")
        }).catch(function (e) {
            res.send(e)
        })
}