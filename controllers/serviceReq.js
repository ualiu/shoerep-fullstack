const ServiceRequest = require('../models/Appointment.js')

// Handle form submissions to /servicerequest endpoint
app.post('/servicerequest', async (req, res) => {
  try {
    // Create a new service request object
    const request = new ServiceRequest({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      date: req.body.date,
      time: req.body.time,
      service: req.body.service,
      notes: req.body.notes,
    });

    console.log(request);

    // Save the service request to the database
    await request.save();

    // Redirect the user back to the homepage
    res.redirect('/');
  } catch (error) {
    console.error(error);
    // Send a 500 error response if an error occurs
    res.status(500).send('An error occurred, please try again later.');
  }
});

app.get("/admin", async (req, res) => {
  // Fetch all form data from the database
  const serviceRequests = await ServiceRequest.find({}).sort({ date: 1, time: 1 });

  // Render the admin.ejs template and pass in the form data
  res.render("admin", {serviceRequests });
});