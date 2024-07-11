const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
    mongoose.connect("mongodb+srv://sakshamgoel1901:kl71wY92rPsyE5nv@saksham.ap8r7m0.mongodb.net/Medicine",{
        
    }).then(()=>console.log("connection successfull"))
    .catch((error)=>{
        console.log("issue in db connection")
        console.log(error.message)
        process.exit(1);
    });
};