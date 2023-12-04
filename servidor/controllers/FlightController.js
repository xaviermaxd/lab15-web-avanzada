// controllers/FlightController.js
const FlightModel = require('../models/FlightModel');

class FlightController {
    createFlight = async (req, res) => {
        try {
        const flightId = await FlightModel.createFlight(req.body);
        res.status(201).json({ flightId });
        } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    getFlightById = async (req, res) => {
        try {
        const flightId = req.params.id;
        const flight = await FlightModel.getFlightById(flightId);
        res.status(200).json({ flight });
        } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    updateFlight = async (req, res) => {
        try {
        const flightId = req.params.id;
        const success = await FlightModel.updateFlight(flightId, req.body);
        res.status(success ? 200 : 404).json({ success });
        } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    deleteFlight = async (req, res) => {
        try {
        const flightId = req.params.id;
        const success = await FlightModel.deleteFlight(flightId);
        res.status(success ? 200 : 404).json({ success });
        } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    };
}

module.exports = new FlightController();
