const express = require("express")
const studentController = require("../controller/studentController")

const routes = express.Router()

routes.post("/Create/student", studentController.CreateStudent)
routes.get("/read/student", studentController.readData)
routes.put("/update/student/:id", studentController.update)
routes.delete("/delete/student/:id", studentController.deleteData)

module.exports = routes