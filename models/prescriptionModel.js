const mongoose = require('mongoose')
const prescriptionSch = mongoose.Schema({
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

const Prescription = mongoose.model('prescription', prescriptionSch)
module.exports = Prescription