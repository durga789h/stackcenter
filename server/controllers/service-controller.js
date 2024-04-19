const service=require('../models/server-model')


const services=async(req,res)=>{
try {
    const response=await service.find();
    if(!response){
        res.status(404).json({msg:"no service found"})
    }
    res.status(200).json({msg:response})
    
} catch (error) {
    console.error('service error')
}
}
module.exports=services