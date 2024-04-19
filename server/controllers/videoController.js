// controllers/videoController.js

const Video = require('../models/course-model');

const uploadVideo = async (req, res) => {
  try {
    // Check if req.file exists and has the expected properties
    if (!req.file || !req.file.originalname || !req.file.filename || !req.file.size) {
      return res.status(400).json({ message: 'No valid file uploaded' });
    }

    const { originalname, filename, size } = req.file;
    const video = new Video({ originalname, filename, size });
    const savedVideo = await video.save();
    
    // Respond with success message and saved video data

    res.status(201).json({ message: 'Video uploaded successfully', video: savedVideo });
    console.log(savedVideo)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error uploading video' });
  }
};

const getVideos = async (req, res) => {
  try {
    const videos = await Video.find({});
    // Respond with the list of videos
    res.status(200).json({ videos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving videos' });
  }
};

module.exports = { uploadVideo, getVideos };
