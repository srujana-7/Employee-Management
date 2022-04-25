
const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema(
  {
 
  

name:{
    type:String,
    trim:true,
    required:true,
},
role:{
    type:String,
    required:true,
},    
phone_no:{
    type:Number, 
   required:true,
},
loation:{
    type:String,
},
  },
  { timestamps: true }
);
module.exports = mongoose.model("Employee", EmployeeSchema);