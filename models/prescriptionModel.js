const mongoose = require('mongoose')
const prescriptionSch = mongoose.Schema({
    patient_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'patient'
    },

    doctor_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'doctor'
    },

    start_date: {
        type: String,
        require: true,
        trim: true
    },

    end_date:{
        type:String,
        require:true,
        trim: true
    },

    medicine_name:{
        type: String,
        require: true,
        trim: true
    },

    morning_time: {
        type: String,
        require: true,
        trim: true
    },

    day_time: {
        type: String,
        require: true,
        trim: true
    },

    night_time: {
        type: String,
        require: true,
        trim: true
    },
},
    { timestamps: true }
)

const Prescription = mongoose.model('prescription', prescriptionSch)
module.exports = Prescription