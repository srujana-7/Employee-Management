const express = require('express')

const mongoose = require('mongoose')
const EmployeeRouter = require('./routes/employee')
const dotenv = require("dotenv");
dotenv.config();

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(EmployeeRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

mongoose.connect(process.env.MONGO_URL).then
(()=>{
    console.log("connection success!")}).catch((err)=>{
        console.log(err)
    })