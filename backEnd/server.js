const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const studentRoutes = require("./Router/studentRoutes")
const teacherRoutes = require("./Router/teacherRoutes")
const documentRoutes = require("./Router/documentRoutes")
const cors = require("cors")

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MongoDB_Url).then(() => {
    console.log("Database has bees connected") 
}).catch(error => console.log(error))

app.use(studentRoutes, teacherRoutes, documentRoutes)

app.listen(process.env.port, () => console.log(`Server is Running on port ${process.env.port}`))