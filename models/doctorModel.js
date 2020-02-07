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

    image: {
        type: String,
        require: true,
        trim: true
    }
},
   
)

const Doctor = mongoose.model('doctor', doctorSch)
module.exports = Doctor