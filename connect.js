const mongoose=require("mongoose");
//database name-student_information
mongoose.connect("mongodb://localhost:27017/student_information",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection successfully");
}).catch((err)=>{
    console.log("connection error");
})