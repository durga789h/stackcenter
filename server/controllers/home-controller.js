const Homesche = require('../models/home-model');

const homedata = async (req, res) => {
  try {
    const response = await Homesche.find();
    if (response.length === 0) {
      res.status(404).json({ data: false });
    } else {
      res.status(200).json({ data: response });
    }
  } catch (error) {
    console.error('Home data error:', error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

const createHomeData = async (req, res) => {
  try {
    const { title, description } = req.body;

    // Check if req.file exists
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Include uploadedAt when creating new entry
    const uploadedAt = new Date(); // Current date/time

    const newData = new Homesche({ title, description, filePath: req.file.path, uploadedAt });
    await newData.save();

    res.status(200).json({ message: 'PDF uploaded successfully', response: newData });
  } catch (error) {
    console.error('Create home data error:', error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

module.exports = { homedata, createHomeData };
