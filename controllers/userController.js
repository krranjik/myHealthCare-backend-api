const user = require("../models/userModel")

//register user function

exports.registerUser = (req, res) => {
    const register = new user(req.body)
    register.save().then(function () {
        res.send("User has been registered")

    }).catch(function (e) {
        res.send(e)
    })
}

//select all user function

exports.getUser = (req, res) => {
    const getAllUser = user.find().then(function (getAllUser) {
        res.send(getAllUser)
    }).catch(function (e) {
        res.send(e)
    })
}

//select user by id function

exports.findUserById = (req, res) => {
    user.findById(req.params._id)
        .then(function (userById) {
            res.send(userById)
        }).catch(function (e) {
            res.send(e)
        })
}

//update user function

exports.updateUser = (req, res) => {
    user.findOneAndUpdate(req.params._id, req.body)
        .then(function () {
            res.send("User has been updated successfully")
        }).catch(function (e) {
            res.send(e)
        })
}