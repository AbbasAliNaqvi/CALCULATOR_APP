const mongoose = require('mongoose');

const employeeeSchema = new mongoose.Schema({
    employeeeId:{
        type:String,
        required:true,
        unique:true,
    },
    employeeeName:{
        type:String,
        required:true,
    },
    designation:{
        type:String,
        required:true,
    },
    joiningDate:{
        type:String,
        required:true,
    },
    Dateofbirth:{
        type:String,
        required:true,
    },
    salary:{
        type:Number,
        required:true,
    },
    activeEmployee:{
        type:Boolean,
        required:true,
    },
    PhoneNo:{
        type:String,
        required:true, 
    },
    Address:{
        type:String,
        required:true, 
    },
    CreatedAt:{
        type:Date,
        default:Date.now
    },
})
const Emeployee = mongoose.model("Employee",employeeeSchema);
module.exports = Emeployee;