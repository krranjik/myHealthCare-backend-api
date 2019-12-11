const user = require("../models/userModel")

//register user function//

exports.registerUser = (req, res) => {
    const register = new user(req.body)
    register.save().then(function () {
        res.send("User has been registered")

    }).catch(function (e) {
        res.send(e)
    })
}

//Select all user function//

exports.getUser = (req,res)=> {
    const getAllUser = user.find().then(function(getAllUser){
        res.send(getAllUser)
    }).catch(function (e){
        res.send(e)
    })
}