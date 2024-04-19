require("dotenv").config();
const cors = require('cors');
const express = require("express");
const app = express();
var bodyParser = require('body-parser');
const authRoute = require("./routes/auth-route");
const contactRoute = require('./routes/contact-router');
const aboutRoute = require('./routes/about-router');
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const serviceRoute = require('./routes/service-router');
const adminRoute = require('./routes/admin-router');
const homeRoute = require('./routes/home-router');
const videoRoutes = require('./routes/course-router');
const path =require("path");


//const path = require('path');

const corsOptions = {
  origin: "http://localhost:5173", // Remove trailing slash
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true, // Use lowercase "credentials"
};
                               
// Apply CORS middleware
app.use(cors(corsOptions));

//for video upl
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//app.use(express.static( __dirname + '/uploads'))

app.use('/videos', videoRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Mount the Router
app.use("/api/auth", authRoute);
app.use('/api/form', contactRoute);
app.use(errorMiddleware);
app.use("/api/data", serviceRoute);
app.use('/api/datas', aboutRoute);
app.use('/api/home', homeRoute);
app.use("/api/admin", adminRoute);

// Access the uploaded file through req.file

const PORT = 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
});
