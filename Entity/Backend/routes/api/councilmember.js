const express = require('express');
const { CouncilMember } = require('../../db/models');

const router = express.Router();

// Middleware to parse JSON requests
router.use(express.json());

// GET all council members
router.get('/', async (req, res) => {
    try {
        const councilMembers = await CouncilMember.findAll({
            include: ['User', 'Council']
        });
        res.json(councilMembers);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// GET a single council member by ID
router.get('/:id', async (req, res) => {
    try {
        const councilMember = await CouncilMember.findByPk(req.params.id, {
            include: ['User', 'Council']
        });
        if (councilMember) {
            res.json(councilMember);
        } else {
            res.status(404).send('Council member not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// POST to create a new council member
router.post('/', async (req, res) => {
    try {
        const councilMember = await CouncilMember.create(req.body);
        res.status(201).json(councilMember);
    } catch (error) {
        res.status(500).send('Error creating council member');
    }
});

// PUT to update a council member
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await CouncilMember.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedCouncilMember = await CouncilMember.findByPk(req.params.id);
            res.json(updatedCouncilMember);
        } else {
            res.status(404).send('Council member not found');
        }
    } catch (error) {
        res.status(500).send('Error updating council member');
    }
});

// DELETE a council member
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await CouncilMember.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).send('Council member not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
