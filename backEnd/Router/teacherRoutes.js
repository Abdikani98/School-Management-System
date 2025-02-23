const express = require("express")
const teacherController = require("../controller/teacherController")

const routes = express.Router()

routes.post("/create/teacher", teacherController.createTeacher)
routes.get("/read/teacher", teacherController.readTeacher)
routes.put("/update/teacher/:id", teacherController.updataTeacher)
routes.delete("/delete/teacher/:id", teacherController.deleteTeacher)

module.exports = routes