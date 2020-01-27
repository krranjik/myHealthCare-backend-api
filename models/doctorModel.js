const mongoose = require('mongoose')

const doctorSch = mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },

    department: {
        type: String,
        require: true,
        trim: true
    },

    phone: {
        type: String,
        require: true,
        trim: true
    },

    description: {
        type: String,
        require: true,
        trim: true
    },

    location: {
        type: String,
        require: true,
        trim: true
    },

    rating: {
        type: String,
        require: true,
        trim: true
    },
},
    { timestamps: true }
)

const Doctor = mongoose.model('doctor', doctorSch)
module.exports = Doctor