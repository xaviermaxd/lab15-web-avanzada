// routes/pilotsRoutes.js
const express = require('express');
const router = express.Router();
const PilotController = require('../controllers/PilotController');

router.post('/pilots', PilotController.createPilot);
router.get('/pilots/:id', PilotController.getPilotById);
router.put('/pilots/:id', PilotController.updatePilot);
router.delete('/pilots/:id', PilotController.deletePilot);

module.exports = router;
