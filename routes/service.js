const express = require("express");
const router = express.Router();
const serviceController = require('../controllers/serviceReq')

router.post('/servicerequest', (req, res) => {
  console.log('Incoming Request: ', req.body);
  serviceController.serviceReq(req, res);
});

module.exports = router;