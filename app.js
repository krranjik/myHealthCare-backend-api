require("./database/databaseFile")
const express = require('express')
const bodyparser = require("body-parser")
const app = express()

//calling routers

const userRouter = require("./routers/userRouter")
const doctorRouter = require("./routers/doctorRouter")

//sending json data in UI

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(express.json())

app.use(userRouter)
app.use(doctorRouter)

app.listen(4000)