// controllers/BaseController.js
const BaseModel = require('../models/BaseModel');

class BaseController {
    createBase = async (req, res) => {
        try {
        const baseId = await BaseModel.createBase(req.body);
        res.status(201).json({ baseId });
        } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    getBaseById = async (req, res) => {
        try {
        const baseId = req.params.id;
        const base = await BaseModel.getBaseById(baseId);
        res.status(200).json({ base });
        } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    updateBase = async (req, res) => {
        try {
        const baseId = req.params.id;
        const success = await BaseModel.updateBase(baseId, req.body);
        res.status(success ? 200 : 404).json({ success });
        } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    deleteBase = async (req, res) => {
        try {
        const baseId = req.params.id;
        const success = await BaseModel.deleteBase(baseId);
        res.status(success ? 200 : 404).json({ success });
        } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    };
}

module.exports = new BaseController();
