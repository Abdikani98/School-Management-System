const express = require("express")
const documentController = require("../controller/documentController")
const uploadFile = require("../middleware/uploadFile")

const routes = express.Router()

routes.post("/create/document", uploadFile.single("document"), documentController.createData)

module.exports = routes