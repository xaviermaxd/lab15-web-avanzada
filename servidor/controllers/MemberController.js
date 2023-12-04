// controllers/MemberController.js
const MemberModel = require('../models/MemberModel');

class MemberController {
    createMember = async (req, res) => {
        try {
        const memberId = await MemberModel.createMember(req.body);
        res.status(201).json({ memberId });
        } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    getMemberById = async (req, res) => {
        try {
        const memberId = req.params.id;
        const member = await MemberModel.getMemberById(memberId);
        res.status(200).json({ member });
        } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    updateMember = async (req, res) => {
        try {
        const memberId = req.params.id;
        const success = await MemberModel.updateMember(memberId, req.body);
        res.status(success ? 200 : 404).json({ success });
        } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    deleteMember = async (req, res) => {
        try {
        const memberId = req.params.id;
        const success = await MemberModel.deleteMember(memberId);
        res.status(success ? 200 : 404).json({ success });
        } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    };
}

module.exports = new MemberController();
