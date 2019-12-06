const mongoose = require('mongoose')
const prescription = mongoose.model('prescription',{
    user_id: {
        type: String,
        require: true,
        trim: true
    },

    prescription_name: {
        type: String,
        require: true,
        trim: true
    }
})