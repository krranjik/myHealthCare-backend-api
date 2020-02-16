const user = require("../models/userModel")

//register user function

exports.registeruser = (req, res) => {
    console.log(req.body)
    const register = new user(req.body)
    register.save().then(function () {
        res.send("user has been registered")

    }).catch(function (e) {
        res.send(e)
    })
}

//select all user function

exports.getUser = (req, res) => {
    const getAllUser = user
        .find().then(function (getAllUser) {
            res.send(getAllUser)
        }).catch(function (e) {
            res.send(e)
        })
}

//select user by id function

exports.finduserById = (req, res) => {
    user.findById(req.params._id)
        .then(function (userById) {
            res.send(userById)
        }).catch(function (e) {
            res.send(e)
        })
}

//update user function

exports.updateuser = (req, res) => {
    user.findByIdAndUpdate(req.params._id, req.body)
        .then(function () {
            res.send("user has been updated successfully")
        }).catch(function (e) {
            res.send(e)
        })
}

//delete user function

exports.deleteuser = (req, res) => {
    user.findByIdAndDelete(req.params._id)
        .then(function () {
            res.send("user has been deleted")
        }).catch(function (e) {
            res.send(e)
        })
}

//function for Login

exports.userLogin = async (req, res) => {
    try {
        console.log(req.body)
        const user1 = await user.checkCrediantialsDb(req.body.username,
            req.body.password)
        const token = await user1.generateAuthToken()
        const name = await user1.username;
        res.send({ name, token })
    }
    catch (e) {
        res.status(400).send()
    }
}

//function for logout

exports.logout = async function (req, res) {
    // Log User out of the application
    try {
        var user = req.user
        user.tokens = user.tokens.filter((token) => {
            return token.token != req.token
        })
        await user.save()
        res.json({
            status: "success",
            message: "Logout Successful",
        })
    } catch (error) {
        res.send({
            status: 500,
            message: error.message
        })
    }
}