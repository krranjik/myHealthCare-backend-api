const mongoose = require('mongoose')

const appointmentSch = mongoose.Schema({
    patient_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'patient',
        trim: true
    },

    doctor_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'doctor',
        trim: true
    },

    appoint_date: {
        type: String,
        require: true,
        trim: true
    },

    appoint_time: {
        type: String,
        require: true,
        trim: true
    },

    status: {
        type: String,
        require: true,
        trim: true,
        default: "Pending"
    }

},
    { timestamps: true }
)

const Appointment = mongoose.model('appointment', appointmentSch)

module.exports = Appointment