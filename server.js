const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const connectDB = require("./config/database.js");

// Load environment variables from .env file
require("dotenv").config({ path: "./config/.env" });

// Connect to Database
connectDB();

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

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

