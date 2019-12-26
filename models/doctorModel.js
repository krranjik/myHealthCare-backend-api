const mongoose = require('mongoose')

const doctor = mongoose.model('doctor', {
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

    hospital: {
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

module.exports = doctor