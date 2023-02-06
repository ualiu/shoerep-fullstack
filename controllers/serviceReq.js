
const ServiceRequest = require('../models/Appointment.js');

module.exports = {

  // Handle form submissions to /servicerequest endpoint
serviceReq: async (req, res) => {
  console.log('Processing Request: ', req.body);
    try {
      // Create a new service request object
      const request = await ServiceRequest.create({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        date: req.body.date,
        time: req.body.time,
        service: req.body.service,
        notes: req.body.notes,
      });
  
      console.log('Appointment request has been created');
  
      // Redirect the user back to the homepage
      res.redirect('/');
    } catch (error) {
      console.error(error);
      // Send a 500 error response if an error occurs
      res.status(500).send('An error occurred, please try again later.');
    }
  }

}