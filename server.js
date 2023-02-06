const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const connectDB = require("./config/database.js");
const mainRoutes = require('./routes/main.js');
const serviceRoutes = require('./routes/service.js')

// Load environment variables from .env file
require("dotenv").config({ path: "./config/.env" });

// Connect to Database
try {
  connectDB();
  console.log("Connected to the database");
} catch (error) {
  console.error("Error connecting to the database:", error);
}

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS to allow requests from any origin
app.use(cors());

// Parse form data in request body
app.use(express.urlencoded({ extended: true }));

//Set view engine
app.set("view engine", "ejs");

// Serve static files from the public folder
app.use(express.static('public'));

// Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);
app.use("/servicerequest", serviceRoutes);

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}).on("error", (error) => {
  console.error("Error starting server:", error);
});

