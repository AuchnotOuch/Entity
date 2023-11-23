const express = require('express');
const { PollHistory } = require('../../db/models');

const router = express.Router();

// Middleware to parse JSON requests
router.use(express.json());

// GET all poll histories
router.get('/', async (req, res) => {
    try {
        const pollHistories = await PollHistory.findAll({
            include: ['Poll', 'PollOption', 'User']
        });
        res.json(pollHistories);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// GET a single poll history by ID
router.get('/:id', async (req, res) => {
    try {
        const pollHistory = await PollHistory.findByPk(req.params.id, {
            include: ['Poll', 'PollOption', 'User']
        });
        if (pollHistory) {
            res.json(pollHistory);
        } else {
            res.status(404).send('Poll history not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// POST to create a new poll history
router.post('/', async (req, res) => {
    try {
        const pollHistory = await PollHistory.create(req.body);
        res.status(201).json(pollHistory);
    } catch (error) {
        res.status(500).send('Error creating poll history');
    }
});

// PUT to update a poll history
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await PollHistory.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedPollHistory = await PollHistory.findByPk(req.params.id);
            res.json(updatedPollHistory);
        } else {
            res.status(404).send('Poll history not found');
        }
    } catch (error) {
        res.status(500).send('Error updating poll history');
    }
});

// DELETE a poll history
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await PollHistory.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).send('Poll history not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
