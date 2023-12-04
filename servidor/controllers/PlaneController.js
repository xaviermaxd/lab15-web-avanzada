// controllers/PlaneController.js
const PlaneModel = require('../models/PlaneModel');

class PlaneController {
    createPlane = async (req, res) => {
        try {
        const planeId = await PlaneModel.createPlane(req.body);
        res.status(201).json({ planeId });
        } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    getPlaneById = async (req, res) => {
        try {
        const planeId = req.params.id;
        const plane = await PlaneModel.getPlaneById(planeId);
        res.status(200).json({ plane });
        } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    updatePlane = async (req, res) => {
        try {
        const planeId = req.params.id;
        const success = await PlaneModel.updatePlane(planeId, req.body);
        res.status(success ? 200 : 404).json({ success });
        } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    deletePlane = async (req, res) => {
        try {
        const planeId = req.params.id;
        const success = await PlaneModel.deletePlane(planeId);
        res.status(success ? 200 : 404).json({ success });
        } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    };
}

module.exports = new PlaneController();
