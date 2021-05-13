const express = require("express");
const app = express();
const Student = require("./models/studentModel");
const conn = require("./connect");

const port = process.env.PORT || 8000;  

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const router = require("./Router/router");
app.use("/api",router);


app.listen(port, () => {
    console.log("connection");
});