const mongoose = require("mongoose")
const studentSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }
},
{timestamps: true}
)

module.exports = mongoose.model("Studens", studentSchema)