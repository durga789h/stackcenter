const express = require("express");
const router = express.Router();
const aboutController=require('../controllers/about-controller');


router.route('/about')
  .get(aboutController.aboutdata).post(aboutController.createAboutData);

module.exports = router;