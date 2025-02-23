const studentModel = require("../model/studentModel")

//create data
const CreateStudent = async (req, res) => {
    const newData = studentModel(req.body)
    const savaData = await newData.save()
    if(savaData){
        res.send(savaData)
    }
}

// read data

const readData = async (req,res)=>{
    const readData = await studentModel.find()
    if(readData){
        res.send(readData)
    }
}

// update data

const update = async(req,res)=>{
    const updateData = await studentModel.updateOne({_id: req.params.id}, {$set: req.body})
    if(updateData){
        res.send("Update Success")
    }
}

    // delete
const deleteData = async(req,res)=> {
    const deletaData = await studentModel.deleteOne({_id: req.params.id})
    if(deletaData){
        res.send("Delete successfuly")
    }
}


module.exports = {CreateStudent,readData,update,deleteData}

 