
const bcrypt=require("bcrypt")
const pharmacy=require("../models/Pharmacy")
const jwt = require("jsonwebtoken")
exports.register=async(req,res)=>{
    try{
    const{ name,address,contact,email,password}=req.body;
    if(!name||!address||!contact||!email||!password)
        {
            return res.status(403).send({
                success: false,
                message: "All Fields are required",
              })
        }
        const check=await pharmacy.findOne({email})
        if(check)
            {
                return res.status(400).json({
                    success: false,
                    message: "Pharmacy already exist",
                  })
            }
            const hashedPassword = await bcrypt.hash(password, 10)

            const user = await pharmacy.create({
                name,contact,address,email,password:hashedPassword
              })

              return res.status(200).json({
                success: true,
                user,
                message: "User registered successfully",
              })




    }
    catch(error)
    {
        console.error(error)
        return res.status(500).json({
          success: false,
          message: "User cannot be registered. Please try again.",
        })
    }
}
exports.pharlog = async (req, res) => {
    try {
      
      const { email, password } = req.body
  
      
      if (!email || !password) {
      
        return res.status(400).json({
          success: false,
          message: `Please Fill up All the Required Fields`, 
        })
      }
  
     const user = await pharmacy.findOne({ email })
     
   
      if (!user) {
        
        return res.status(401).json({
          success: false,
          message: `User is not Registered with Us Please SignUp to Continue`,
        })
      }
  
      if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign(
          { email: pharmacy.email, id: user._id},"Saksham",
          {
            expiresIn: "24h",
          }
        )
  
        
        pharmacy.token = token
        pharmacy.password = undefined
        return res.status(200).json({
          success: true,
          message: token,
          user
        })
        
      }
      else
      {
          return res.status(401).json({
              success: false,
              message: `Password is incorrect`,
            })
      }
    } catch (error) {
      console.error(error)
    
      return res.status(500).json({
        success: false,
        message: `Login Failure Please Try Again`,
      })
    }
  }
  