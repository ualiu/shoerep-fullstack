const mongoose = require("mongoose");

// Define a schema for service request data
const serviceRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  service: { type: String, required: true },
  notes: { type: String },
});

// Create a model based on the schema
module.exports = mongoose.model('ServiceRequest', serviceRequestSchema);