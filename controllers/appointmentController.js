const appointment = require('../models/appointmentModel')

//add appointment function

exports.addAppointment = (req, res) => {
    const addAppoint = new appointment(req.body)
    addAppoint.save().then(function () {
        res.send("A new appointment has been added")

    }).catch(function (e) {
        res.send(e)
    })
}

//select all appointment function

exports.getAppointment = (req, res) => {
    const getAppoint = appointment
        .find().then(function (getAppoint) {
            res.send(getAppoint)
        }).catch(function (e) {
            res.send(e)
        })
}

//select appointment by id function
exports.getAppointmentById = (req, res) => {
    appointment.findById(req.params._id)
        .then(function (appointmentById) {
            res.send(appointmentById)
        }).catch(function (e) {
            res.send(e)
        })
}

//update appointment function
exports.updateAppointment = (req, res) => {
    appointment.findOneAndUpdate(req.params._id, req.body)
        .then(function () {
            res.send("Appointment has been updated")
        }).catch(function (e) {
            res.send(e)
        })
}

//delete appointment function
exports.deleteAppointment = (req, res) => {
    appointment.findOneAndDelete(req.params._id)
        .then(function () {
            res.send("Appointment has been deleted")
        }).catch(function (e) {
            res.send(e)
        })
}