const express = require('express');
const { Council } = require('../../db/models');

const router = express.Router();

// Middleware to parse JSON requests
router.use(express.json());

// GET all councils
router.get('/', async (req, res) => {
    try {
        const councils = await Council.findAll({
            include: ['User', 'CouncilMember']
        });
        res.json(councils);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// GET a single council by ID
router.get('/:id', async (req, res) => {
    try {
        const council = await Council.findByPk(req.params.id, {
            include: ['User', 'CouncilMember']
        });
        if (council) {
            res.json(council);
        } else {
            res.status(404).send('Council not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// POST to create a new council
router.post('/', async (req, res) => {
    try {
        const council = await Council.create(req.body);
        res.status(201).json(council);
    } catch (error) {
        res.status(500).send('Error creating council');
    }
});

// PUT to update a council
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Council.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedCouncil = await Council.findByPk(req.params.id);
            res.json(updatedCouncil);
        } else {
            res.status(404).send('Council not found');
        }
    } catch (error) {
        res.status(500).send('Error updating council');
    }
});

// DELETE a council
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Council.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).send('Council not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
