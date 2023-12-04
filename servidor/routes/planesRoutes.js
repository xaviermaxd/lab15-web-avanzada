// routes/planesRoutes.js
const express = require('express');
const router = express.Router();
const PlaneController = require('../controllers/PlaneController');

router.post('/planes', PlaneController.createPlane);
router.get('/planes/:id', PlaneController.getPlaneById);
router.put('/planes/:id', PlaneController.updatePlane);
router.delete('/planes/:id', PlaneController.deletePlane);

module.exports = router;
