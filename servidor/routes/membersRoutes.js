// routes/membersRoutes.js
const express = require('express');
const router = express.Router();
const MemberController = require('../controllers/MemberController');

router.post('/members', MemberController.createMember);
router.get('/members/:id', MemberController.getMemberById);
router.put('/members/:id', MemberController.updateMember);
router.delete('/members/:id', MemberController.deleteMember);

module.exports = router;
