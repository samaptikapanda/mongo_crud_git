const express=require("express");
const router=express.Router();


const student=require("../api/student");
router.use("/student",student);


module.exports=router;