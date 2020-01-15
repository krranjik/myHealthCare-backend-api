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
app.use(bodyParser.json());

//calling routers

const apiRouter = require("./routers/apiRouter")
const patientRouter = require("./routers/patientRouter")
const doctorRouter = require("./routers/doctorRouter")
const appointmentRouter = require("./routers/appointmentRouter")
const prescriptionRouter = require("./routers/prescriptionRouter")
const reportRouter = require("./routers/reportRouter")

//sending json data in UI
app.use(express.json())

//use api routes in the app
app.use('/api', apiRouter)
app.use(patientRouter)
app.use(doctorRouter)
app.use(appointmentRouter)
app.use(prescriptionRouter)
app.use(reportRouter)

app.listen(4000)

//test comment