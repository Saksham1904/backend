
const pharmacy=require("../models/Pharmacy")

const redis=require("../db/redis")
exports.show=async(req,res)=>{
    let  products=await redis.get("products")
    if(!products)
    {
        products=await pharmacy.find({})
        await redis.set("products",JSON.stringify(products))
       
        return res.status(200).json({
            success:true,
            products,
        })
    }
    return res.status(200).json({
        success:true,
        pharmacy:JSON.parse(products),
    })  
}


exports.search=async(req,res)=>{
    try{
      const {name}=req.query
     
      let  products=await redis.get(name)
      if(products)
      {
        
         products=JSON.parse(products)
      }
      else{
        products=await pharmacy.find({})
        await redis.set(name,JSON.stringify(products))
      }
      
    
      
      const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(name.toLowerCase())
      );
      return res.status(200).json({
        success:true,
        filteredProducts
      })

    }
    catch(error)
    {
        console.log(error)
        return res.status(400).json({
            success:false,
            error
        })
    }
    

}