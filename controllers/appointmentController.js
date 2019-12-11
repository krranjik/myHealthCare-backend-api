const appointment = require('../models/appointmentModel')

//add appointment function

exports.addAppointment = (req, res) => {
    const addAppoint = new appointment(req, body)
    addAppoint.save().then(function () {
        res.send("A new appointment has been added")

    }).catch(function (e) {
        res.send(e)
    })
}

//select appointment function

exports.getAppointment = (req, res) => {
    const getAppoint = appointment.find().then(function (getAppoint) {
        res.send(getAppoint)
    }).catch(function (e) {
        res.send(e)
    })
}