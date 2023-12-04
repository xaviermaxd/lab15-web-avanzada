// routes/index.js
const express = require('express');
const router = express.Router();

// Importar rutas de cada entidad
const pilotsRoutes = require('./pilotsRoutes');
const planesRoutes = require('./planesRoutes');
const flightsRoutes = require('./flightsRoutes');
const membersRoutes = require('./membersRoutes');
const basesRoutes = require('./basesRoutes');

// Asignar rutas a sus respectivos prefijos
router.use('/api', pilotsRoutes);
router.use('/api', planesRoutes);
router.use('/api', flightsRoutes);
router.use('/api', membersRoutes);
router.use('/api', basesRoutes);


module.exports = router;
