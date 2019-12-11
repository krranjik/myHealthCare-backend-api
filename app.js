require("./database/databaseFile")
const express = require('express')
const bodyparser = require("body-parser")
const app = express()

//Calling Routers//

const userRouter = require("./routers/userRouter")

//Sending JSON data in UI//

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(express.json())

app.use(userRouter)

app.listen(4000)