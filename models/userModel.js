const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true 
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    tokens: [{
        token: {
            type: String,
        }
    }]
})

user.statics.checkCrediantialsDb = async (email, password) => {
    const userCheck = await users.findOne({ email: email, password: password })
    return userCheck
}


user.methods.generateAuthToken = async function () {
    const userAuth = this
    const token = jwt.sign({ _id: userAuth._id.toString() }, 'thisismynewcourse')

    console.log(token);
    userAuth.tokens = userAuth.tokens.concat({ token: token })
    await userAuth.save()
    return token
}

const User = mongoose.model('user', userSchema)

module.exports = User