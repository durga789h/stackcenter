const User = require('../models/auth-model');
const Contact = require('../models/contact-model');
const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({}, { password: 0 });
        console.log(users);
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "no user found" })
        }
        else {

            res.status(200).json(users)
        }
    } catch (error) {
        next(error)
    }

};
//single user logic
const getUserById=async(req,res,next)=>{
    try {
        const id=req.params.id;
        
       const data= await User.findOne({_id:id},{password:0});
        return res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

//user admin update logic
const updateUserById=async(req,res)=>{
try {
    const id=req.params.id;
    const updateUserData=req.body;
    const updatedData=await User.updateOne({_id:id},{
        $set:updateUserData,
    });
    return res.status(200).json( updatedData);

} catch (error) {
    next(error);
}
}




//user delete logic
const deleteUserById=async(req,res)=>{
try {
    const id=req.params.id;
    await User.deleteOne({_id:id})
    return res.status(200).json({message:"user deleted successfully"})
    
} catch (error) {
    next(error)
    
}
}
const getAllContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find(); //Contact hold database
        console.log(contacts);
        if (!contacts || contacts.length === 0) {
            return res.status(404).json({ message: "no contacts found" })
        }
        return res.status(200).json(contacts);
    } catch (error) {
        next(error);

    }
}
//admin-contacts delete logic
const deleteContactById=async(req,res)=>{
try {
    const id=req.params.id;
    await Contact.deleteOne({_id:id})
    return res.status(200).json({message:"Contact deleted successfully"})
    
} catch (error) {
    next(error)
    
}
};

/*const getAboutpage=async(req,res,next)=>{
    try{

    }
    catch(errror){
        consolog.log(error)
    }
}





*/

module.exports = { getAllUsers, getAllContacts ,deleteUserById,getUserById,updateUserById,deleteContactById};