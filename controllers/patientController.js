const patient = require("../models/patientModel")

//register patient function

exports.registerPatient = (req, res) => {
    console.log(req.body)
    const register = new patient(req.body)
    register.save().then(function () {
        res.send("Patient has been registered")

    }).catch(function (e) {
        res.send(e)
    })
}

//select all patient function

exports.getPatient = (req, res) => {
    const getAllPatient = patient
    .find().then(function (getAllPatient) {
        res.send(getAllPatient)
    }).catch(function (e) {
        res.send(e)
    })
}

//select patient by id function

exports.findPatientById = (req, res) => {
    patient.findById(req.params._id)
        .then(function (patientById) {
            res.send(patientById)
        }).catch(function (e) {
            res.send(e)
        })
}

//update patient function

exports.updatePatient = (req, res) => {
    patient.findOneAndUpdate(req.params._id, req.body)
        .then(function () {
            res.send("Patient has been updated successfully")
        }).catch(function (e) {
            res.send(e)
        })
}

//delete patient function

exports.deletePatient = (req, res) => {
    patient.findOneAndDelete(req.params._id)
        .then(function () {
            res.send("Patient has been deleted")
        }).catch(function (e) {
            res.send(e)
        })
}

exports.login = async function (req, res) {
    try {
        const { username, password } = req.body
        const user = await User.findByCredentials(username, password)
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