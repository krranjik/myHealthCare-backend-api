const mongoose = require('mongoose')
const reportSch = mongoose.Schema({
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

const Report = mongoose.model('report', reportSch)
module.exports = Report