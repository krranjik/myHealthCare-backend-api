User = require('../models/userModel');

exports.login = async function (req, res) {
    try {
        const { email, password } = req.body
        const user = await User.findByCredentials(email, password)
        if (!user) {
            return res.status(401).send({ error: 'Login failed! Check authentication credentials' })
        }
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.logout = async function (req, res) {
    // Log user out of the application
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token != req.token
        })
        await req.user.save()
        res.json({
            status: "success",
            message: "Logout successful",
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.register = function (req, res) {
    var user = new User(req.body)
    user.save(function(err){
        if(err)
        res.json(err)
        res.json({
            message: "User Created Successfully",
            data: user
        })
    })
}