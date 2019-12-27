require("./database/databaseFile")
const express = require('express')
const bodyparser = require("body-parser")
const app = express()

//calling routers

const patientRouter = require("./routers/patientRouter")
const doctorRouter = require("./routers/doctorRouter")
const appointRouter = require("./routers/appointmentRouter")
const prescripRouter = require("./routers/prescriptionRouter")
const reportRouter = require("./routers/reportRouter")

//sending json data in UI

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(express.json())

app.use(patientRouter)
app.use(doctorRouter)
app.use(appointRouter)
app.use(prescripRouter)
app.use(reportRouter)

app.listen(4000)