const express = require('express')

const mongoose = require('mongoose')
const EmployeeRouter = require('./routes/employee')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(EmployeeRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

mongoose.connect('mongodb://127.0.0.1:27017/employee-mgmt-db', {
})