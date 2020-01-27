const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const patientSch = mongoose.Schema({
    name: {
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
        trim: true

    },

    address: {
        type: String,
        require: true,
        trim: true
    },

    dob: {
        type: String,
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

    weight: {
        type: String,
        require: true,
        trim: true
    },

    height: {
        type: String,
        require: true,
        trim: true
    },

    phone: {
        type: String,
        require: true,
        trim: true
    },

    patient_img: {
        type: String,
        trim: true
    },

    tokens: [{
        token: {
            type: String,
        }
    }]
},
    { timestamps: true }
)

patientSch.statics.checkCrediantialsDb = async (username, password) => {
    const patientCheck = await Patient.findOne({ username: username, password: password })
    return patientCheck
}


patientSch.methods.generateAuthToken = async function () {
    const patientAuth = this
    const token = jwt.sign({ _id: patientAuth._id.toString() }, 'thisismynewcourse')

    console.log(token);
    patientAuth.tokens = patientAuth.tokens.concat({ token: token })
    await patientAuth.save()
    return token
}

const Patient = mongoose.model('patient', patientSch)
module.exports = Patient