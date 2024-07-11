
const Redis=require("ioredis")

const  redis=new Redis({
    host:"redis-14198.c305.ap-south-1-1.ec2.redns.redis-cloud.com",
    port:14198,
    password:"eBsxpzZgYsfvlSdrcJJHhjHpXQ5ESpcs"
})
module.exports=redis