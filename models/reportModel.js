const mongoose = require('mongoose')
const report = mongoose.model('report', {
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

    report_name: {
        type: String,
        require: true,
        trim: true
    },

    report_file: {
        type: String,
        require: true,
        trim: true
    },
})

module.exports = report