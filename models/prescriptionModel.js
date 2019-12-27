const mongoose = require('mongoose')
const prescription = mongoose.model('prescription', {
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

    prescription_name: {
        type: String,
        require: true,
        trim: true
    },

    prescription_file: {
        type: String,
        require: true,
        trim: true
    }
})

module.exports = prescription