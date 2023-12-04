// routes/flightsRoutes.js
const express = require('express');
const router = express.Router();
const FlightController = require('../controllers/FlightController');

router.post('/flights', FlightController.createFlight);
router.get('/flights/:id', FlightController.getFlightById);
router.put('/flights/:id', FlightController.updateFlight);
router.delete('/flights/:id', FlightController.deleteFlight);

module.exports = router;
