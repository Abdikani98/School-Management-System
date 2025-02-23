const DocumentModel = require("../model/documentModel")

// create data

const createData = async(req, res)=>{
    const newData = DocumentModel({
        title: req.body.title,
        discription: req.body.discription,
        document: req.file.filename
    })
    const saveData = await newData.save()
    if(saveData){
        res.send(saveData)
    }
}

module.exports = {createData}