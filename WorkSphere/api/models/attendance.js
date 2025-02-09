const mongoose = require('mangoose')

const attendanceSchema = new mongoose.Schema({
    employeeId:{
        type:String,
        required:true
    },
    employeeName:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
});
const attendance = mongoose.model("Attendance",attendanceSchema);

module.exports = attendance;