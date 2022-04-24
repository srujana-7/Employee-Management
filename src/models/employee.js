
const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema(
  {
 
  

name:{
    type:String,
},
role:{
    type:String,
},    
phone_no:{
    type:Number, 
},
loation:{
    type:String,
},
  },
  { timestamps: true }
);
module.exports = mongoose.model("Employee", EmployeeSchema);