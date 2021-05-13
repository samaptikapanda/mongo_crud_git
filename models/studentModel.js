const mongoose = require("mongoose");


// now create Schema

const studentSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        minlength: 3
    },
    Regno: {
        type: Number,
        min:12,
        required:true
    },

    Email: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
        min: 10,
        max: 10,
        required: true,
        unique: true
    },

    Address: {
        type: String,
        required: true
    },

    DOB: {
        type: Date,
        require: true
    }
})

// create collection

const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;