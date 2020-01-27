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

    phone: {
        type: String,
        require: true,
        trim: true
    },

    patient_img: {
        type: String,
        trim: true
    },


},
    { timestamps: true }
)

userSchema.methods.generateAuthToken = async function () {
    // Generate an auth token for the user
    const user = this
    const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY)
    user.tokens = user.tokens.concat({ token })
    await user.save()
    return token
}

userSchema.statics.findByCredentials = async (email, password) => {
    // Search for a user by email and password.
    const user = await User.findOne({ email })
    if (!user) {
        throw new Error({ error: 'Invalid login credentials' })
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
        throw new Error({ error: 'Invalid login credentials' })
    }
    return user
}

const Patient = mongoose.model('patient', patientSch)
module.exports = Patient