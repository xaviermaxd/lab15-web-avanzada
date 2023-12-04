// controllers/PilotController.js
const PilotModel = require('../models/PilotModel');

class PilotController {
    createPilot = async (req, res) => {
        try {
        const pilotId = await PilotModel.createPilot(req.body);
        res.status(201).json({ pilotId });
        } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    getPilotById = async (req, res) => {
        try {
        const pilotId = req.params.id;
        const pilot = await PilotModel.getPilotById(pilotId);
        res.status(200).json({ pilot });
        } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    updatePilot = async (req, res) => {
        try {
        const pilotId = req.params.id;
        const success = await PilotModel.updatePilot(pilotId, req.body);
        res.status(success ? 200 : 404).json({ success });
        } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    deletePilot = async (req, res) => {
        try {
        const pilotId = req.params.id;
        const success = await PilotModel.deletePilot(pilotId);
        res.status(success ? 200 : 404).json({ success });
        } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    };
}

module.exports = new PilotController();
