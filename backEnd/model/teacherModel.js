const  mongoose  = require("mongoose");

const teacherSchema = mongoose.Schema({
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
    
    phone: {
        type: Number,
        required: true
    },
    subject: {
        type: Number,
        required: true
    },

},
{timestamps: true}
)


module.exports = mongoose.model("Teacher", teacherSchema)