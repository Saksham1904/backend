const express=require("express")
const app=express()


require("dotenv").config();
const PORT=process.env.PORT||4000;

//middleware to pass the body
 app.use(express.json())

 //immport routes
 const Routes=require('./routes/routes')

app.use(Routes)


app.listen(PORT,()=>{
      console.log(`server started successfull at ${PORT}`)
})





const database=require("./db/database")
database.connect();

app.get("/",(req,res)=>{
    res.send(`<h1>this is home page </h1>`)
})


