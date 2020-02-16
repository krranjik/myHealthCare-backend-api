const mongoose = require('mongoose')
const reportSch = mongoose.Schema({
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

    report_name: {
        type: String,
        require: true,
        trim: true
    },

    report_date: {
        type: String,
        require: true,
        trim: true
    },

    image: {
        type: String,
        require: true,
        trim: true
    },
},
    { timestamps: true }
)

const Report = mongoose.model('report', reportSch)
module.exports = Report