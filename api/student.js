const express = require("express");
const Student = require("../models/studentModel");
const router = express.Router();


const studentmodel = require("../models/studentModel")


router.post("/student", async(req,res)=>{
console.log(req.body);
try{

    const user=new Student(req.body);

    const usercreate = await user.save();
    res.status(200).send(usercreate);
   
}catch(err){
    res.status(400).send(err)
}

})


// router.get("/",(req,res)=>{
//     res.send("hello mongoose get method");
// })


module.exports = router;