// home-router.js
const express = require("express");
const router = express.Router();
const homeController = require('../controllers/home-controller');
const multer = require('multer');


// Define multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// Create multer upload instance
const upload = multer({ storage: storage });

// Serve static files from the 'uploads' directory
router.use(express.static(__dirname + '/uploads'));
//router.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Define routes
router.get("/",homeController.homedata);

router.post("/upload", upload.single('image'), homeController.createHomeData, (req,res)=>{
  console.log(req.file);
}); 
// Use upload middleware for the POST route

module.exports = router;
