// routes/basesRoutes.js
const express = require('express');
const router = express.Router();
const BaseController = require('../controllers/BaseController');

router.post('/bases', BaseController.createBase);
router.get('/bases/:id', BaseController.getBaseById);
router.put('/bases/:id', BaseController.updateBase);
router.delete('/bases/:id', BaseController.deleteBase);

module.exports = router;
