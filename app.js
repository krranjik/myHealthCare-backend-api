//Import Database
require("./database/databaseFile")

// Import express
const express = require('express')
const bodyParser = require("body-parser")

// Initialize the app
const app = express()

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/public', express.static(__dirname+'/public'))
app.use(bodyParser.json());

//calling Routers
const userRouter = require("./router/userRouter")
const patientRouter = require("./router/patientRouter")
const doctorRouter = require("./router/doctorRouter")
const appointmentRouter = require("./router/appointmentRouter")
const prescriptionRouter = require("./router/prescriptionRouter")
const reportRouter = require("./router/reportRouter")

//sending json data in UI
app.use(express.json())

//use api routes in the app
app.use(userRouter)
app.use(patientRouter)
app.use(doctorRouter)
app.use(appointmentRouter)
app.use(prescriptionRouter)
app.use(reportRouter)

app.listen("4444")