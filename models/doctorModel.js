const mongoose = require('mongoose')

const doctorSch = mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },

    gender: {
        type: String,
        require: true,
        trim: true
    },

    phone: {
        type: String,
        require: true,
        trim: true
    },

    type: {
        type: String,
        require: true,
        trim: true
    },
})

const Doctor = mongoose.model('doctor', doctorSch)
module.exports = Doctor