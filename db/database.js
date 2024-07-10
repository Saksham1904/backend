const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/Medicine",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(()=>console.log("connection successfull"))
    .catch((error)=>{
        console.log("issue in db connection")
        console.log(error.message)
        process.exit(1);
    });
};