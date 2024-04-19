const Aboutsche=require('../models/about-model')

const aboutdata=async(req,res)=>{
        try {
            const response=await Aboutsche.find();
            if(!response){
                res.status(404).json({msg:"no About data found"})
            }
            res.status(200).json({msg:response})
            
        } catch (error) {
            console.error('about error')
        }
    }
    const createAboutData = async (req, res) => {
        try {
            const { title, description, para1, para2, para3, para4, para5, para6 } = req.body;
            const response=await Aboutsche.create({ title,description,para1,para2,para3,para4,para5,para6 });
            res.status(201).json({ msg: response });
            console.log(response);
          
        } catch (error) {
            console.error('create about data error:', error);
            res.status(500).json({ msg: "Internal server error" });
        }
    };
    module.exports={aboutdata,createAboutData}