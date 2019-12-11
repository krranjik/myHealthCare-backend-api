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
    const getAllDoctor = doctor.find().then(function (getAllDoctor) {
        res.send(getAllDoctor)
    }).catch(function (e) {
        res.send(e)
    })
}