const mongoose = require('mongoose')

const user = mongoose.model('user', {
    name: {
        type: String,
        require: true,
        trim: true
    },
    address: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: email,
        require: true,
        trim: true
    },
    phone: {
        type: Number,
        require: true,
        trim: true
    },

})

module.exports = user