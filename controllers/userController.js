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

exports.getuser = (req, res) => {
    const getAlluser = user
        .find().then(function (getAlluser) {
            res.send(getAlluser)
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
    user.findOneAndUpdate(req.params._id, req.body)
        .then(function () {
            res.send("user has been updated successfully")
        }).catch(function (e) {
            res.send(e)
        })
}

//delete user function

exports.deleteuser = (req, res) => {
    user.findOneAndDelete(req.params._id)
        .then(function () {
            res.send("user has been deleted")
        }).catch(function (e) {
            res.send(e)
        })
}

//function for Login Function

exports.userLogin = async (req, res) => {


    try {
        const user1 = await user.checkCrediantialsDb(req.body.username,
            req.body.password)
        const token = await user1.generateAuthToken()
        const name = await user1.name;
        res.send({ name, token })
    }
    catch (e) {
        res.status(400).send()
    }
}   