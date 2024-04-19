const {Schema,model} =require('mongoose');
const Aboutschema= new Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    para1:{type:String,required:true},
    para2:{type:String,required:true},
    para3:{type:String,required:true},
    para4:{type:String,required:true},
    para5:{type:String,required:true},
    para6:{type:String,required:true},
   

});

const Aboutsche=new model('About',Aboutschema);
module.exports=Aboutsche;