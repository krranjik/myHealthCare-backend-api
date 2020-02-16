const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const userSch = mongoose.Schema({
    username: {
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
},
    { timestamps: true }
)

userSch.statics.checkCrediantialsDb = async (username, password) => {
    const userCheck = await User.findOne({ username: username, password: password })
    return userCheck
}

userSch.methods.generateAuthToken = async function () {
    const userAuth = this
    const token = jwt.sign({ _id: userAuth._id.toString() }, 'thisismynewcourse')

    console.log(token);
    userAuth.tokens = userAuth.tokens.concat({ token: token })
    await userAuth.save()
    return token
}

const User = mongoose.model('user', userSch)
module.exports = User