const mongoose = require('mongoose')

const appointmentSch = mongoose.Schema({
    patient_id: {
        type: String,
        require: true,
        trim: true
    },

    doctor_id: {
        type: String,
        require: true,
        trim: true
    },

    appoint_date: {
        type: Date,
        require: true,
        trim: true
    },

    appoint_time: {
        type: String,
        require: true,
        trim: true
    },
})

const Appointment = mongoose.model('appointment', appointmentSch)

module.exports = Appointment