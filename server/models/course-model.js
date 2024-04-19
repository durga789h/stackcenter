// models/Video.js

const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  originalname: {
    type: String,
    required: true
  },
  filename: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Video = mongoose.model('course', videoSchema);

module.exports = Video;
