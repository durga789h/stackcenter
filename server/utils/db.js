const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/stackcenter_panel";
    await mongoose.connect(URI);
    console.log("Connection successful to DB");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};

module.exports = connectDb;
