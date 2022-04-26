const express = require('express')
const employee = require('../models/employee')

const router = new express.Router()

router.post("/employee/add",(req,res)=>{
    const emp1 = new employee(req.body)
    emp1.save()
    .then( ()=>{
     res.send(emp1)
  //   console.log("Saved !" , req.body)
     }).catch((error)=>{
    res.status(400).send(error)
    })
   
});

router.get("/employee/getAll",(req,res)=>{
 
    employee.find({}).then( (employee) =>{
        res.send(employee)
    }

    ).catch(()=>{
    res.status(500).send()

    })
})


router.get("/employee/getOne/:id" , (req,res)=>{


    employee.findById({_id:req.params.id}).then((employee)=>{
        if(!employee){
        return res.status(404).send()
        }

        res.send(employee)

    }).catch((e)=>{
        res.status(500).send()
    })

})

router.put("/employee/update/:id" ,(req,res)=>{
const updates = Object.keys(req.body)
const allowedUpdates = ['phone_no','role','location']
const isValidOperation = updates.every((update)=>{

    return allowedUpdates.includes(update)
}
)
if(!isValidOperation)
{
    return res.status(400).send({error : 'Invalid operation!!'})
}

const emp1 = employee.findByIdAndUpdate(req.params.id,req.body,{new:true, runValidators:true}).then(
    (employee)=>{
        if(!employee)
        return res.status(404).send()
         
        res.send(employee)
    }
).catch((e)=>{
    res.status(400).send(e)
})

})

router.delete("/employee/delete/:id",(req,res)=>{
    const emp1 = employee.findByIdAndDelete(req.params.id).then( ()=>{
    
    if(!employee)
    {
        return res.status(404).send()
    }
    res.status(200).send("deleted")
    }). catch( (e)=>{
        res.status(500).send()
    })
})

module.exports = router