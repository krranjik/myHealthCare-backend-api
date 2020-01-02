const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const patientSch = mongoose.Schema({
    first_name: {
        type: String,
        require: true,
        trim: true
    },

    last_name: {
        type: String,
        require: true,
        trim: true
    },

    username: {
        type: String,
        require: true,
        trim: true
    },

    password: {
        type: String,
        require: true,
        trim: true
    },

    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true,
        validate: value => {
            if (!validator.isEmail(value)) {
                throw new Error({ error: 'Invalid Email address' })
            }
        }
    },

    address: {
        type: String,
        require: true,
        trim: true
    },

    dob: {
        type: Date,
        require: true,
        trim: true
    },

    gender: {
        type: String,
        require: true,
        trim: true
    },

    bloodgroup: {
        type: String,
        require: true,
        trim: true
    },

    phone: {
        type: String,
        require: true,
        trim: true
    },

    disease: {
        type: String,
        require: true,
        trim: true
    },

    create_date: {
        type: Date,
        default: Date.now
    },

    update_date: {
        type: Date,
        default: Date.now
    },

    patient_img:{
        type: String,
        trim: true
    },
})

const Patient = mongoose.model('patient', patientSch)
module.exports = Patient