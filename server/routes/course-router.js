// routes/videoRoutes.js

const express = require('express');
const router = express.Router();
const multer = require('multer');
const {uploadVideo,getVideos} = require('../controllers/videoController');
const path=require("path");


// Multer setup for storing video files
const storage1 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload1 = multer({ storage: storage1});
router.use(express.static(__dirname + '/uploads'));
// Route for uploading videos
//router.post('/upload', upload1.single('video'), uploadVideo ,(req,res)=>{
 // console.log(req.file);
//});

router.post('/upload', upload1.single('video'), uploadVideo);

// Route for getting all videos
router.get('/', getVideos);
//router.use(express.static( __dirname + '/uploads'))

module.exports = router;
