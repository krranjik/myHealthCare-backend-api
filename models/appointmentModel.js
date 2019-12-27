const mongoose = require('mongoose')

const appointment = mongoose.model('appointment', {
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

module.exports = appointment