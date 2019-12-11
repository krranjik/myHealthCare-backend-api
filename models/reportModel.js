const mongoose = require('mongoose')
const report = mongoose.model('report',{
    user_id: {
        type: String,
        require: true,
        trim: true
    },

    reports: {
        type: String,
        require: true,
        trim: true
    },

    report_type: {
        type: String,
        require: true,
        trim: true
    },
})