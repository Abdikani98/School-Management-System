const teacherController = require("../model/teacherModel")

// create data

const createTeacher = async(req, res)=>{
    const teacherData = teacherController(req.body)
    const saveTeacher = await teacherData.save()
    if(saveTeacher){
        res.send(saveTeacher)
    }
}

    // read data
const readTeacher = async(req,res)=>{
    const readData = await teacherController.find()
    if(readData){
        res.send(readData)
    }
}

    // updata
const updataTeacher = async(req,res)=>{
    const updateTeacher = await teacherController.updateOne({_id: req.params.id}, {$set: req.body})
    if(updateTeacher){
        res.send("Update Successfully")
    }
}
 
    // delete
const deleteTeacher = async(req, res)=>{
    const deleteData = await teacherController.deleteOne({_id: req.params.id})
    if(deleteData){
        res.send("Delete Successfully")
    }
}

module.exports = {createTeacher, readTeacher, updataTeacher, deleteTeacher}