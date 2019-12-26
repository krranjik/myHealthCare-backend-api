const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const patientSchema = new mongoose.Schema({
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
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

patientSchema.statics.checkCrediantialsDb = async (username, password) => {
    const patient1 = await patient.findOne({ username: username, password: password })
    return patient1;
}

patientSchema.methods.generateAuthToken = async function () {
    const patient = this
    const token = jwt.sign({ _id: patient._id.toString() }, 'thisismynewcourse')

    console.log(token);
    patient.tokens = patient.tokens.concat({ token: token })
    await patient.save()
    return token
}
const patient = mongoose.model('patient', patientSchema)
module.exports = patient