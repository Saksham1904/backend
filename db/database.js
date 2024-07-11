const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(()=>console.log("connection successfull"))
    .catch((error)=>{
        console.log("issue in db connection")
        console.log(error.message)
        process.exit(1);
    });
};