const patient = require("../models/patientModel")

//register patient function

exports.addPatient = (req, res) => {
    const rpatient = new patient(req.body)
    rpatient.save().then(function () {
        res.send("Patient has been registered")
    }).catch(function (e) {
        res.send(e)
    })
}


//add patient function

exports.registerPatient = (req, res) => {

    req.files.map(function (items) {
        const regPatient = new patient({
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            address: req.body.address,
            dob: req.body.dob,
            gender: req.body.gender,
            bloodgroup: req.body.bloodgroup,
            weight: req.body.weight,
            height: req.body.height,
            phone: req.body.phone,
            image: items.filename,
        })
        regPatient.save().then(function () {
            res.send("Patient has been registered")

        }).catch(function (e) {
            res.send(e)
        })

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
    req.files.map(function (items) {
        const updpatient = {
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            address: req.body.address,
            dob: req.body.dob,
            gender: req.body.gender,
            bloodgroup: req.body.bloodgroup,
            weight: req.body.weight,
            height: req.body.height,
            phone: req.body.phone,
            image: items.filename,
        }
        patient.findByIdAndUpdate(req.params._id, updpatient)
            .then(function () {
                res.send("Patient has been updated successfully")
            }).catch(function (e) {
                res.send(e)
            })
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

//login function

exports.patientLogin = async (req, res) => {


    try {
        const patient1 = await patient.checkCrediantialsDb(req.body.username,
            req.body.password)
        const token = await patient1.generateAuthToken()
        res.send({
            id: patient1.id,
            name: patient1.name,
            token: token,
            username: patient1.username,
            password: patient1.password,
            email: patient1.email,
            address: patient1.address,
            dob: patient1.dob,
            gender: patient1.gender,
            bloodgroup: patient1.bloodgroup,
            weight: patient1.weight,
            height: patient1.height,
            phone: patient1.phone,
            image: patient1.image
        })
    }
    catch (e) {
        res.status(400).send()
    }
}   