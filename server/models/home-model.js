const { Schema, model } = require('mongoose');

const HomeSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  filePath: {
    type: String, // Assuming the file path will be stored as a string
    required: true
  },
  uploadedAt: {
    type: Date,
    default: Date.now
  }
});
const Homesche= model('Home',HomeSchema);
module.exports=Homesche;