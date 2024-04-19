const {Schema,model} =require('mongoose');
const contactschema= new Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    subject:{type:String,required:true},
    message:{type:String,required:true},

});

const Contact=new model('Contact',contactschema);
module.exports=Contact;