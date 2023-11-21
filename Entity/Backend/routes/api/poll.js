const express = require('express');
const { Poll } = require('../../db/models');

const router = express.Router();

// Middleware to parse JSON requests
router.use(express.json());

// GET all polls
router.get('/', async (req, res) => {
    try {
        const polls = await Poll.findAll({
            include: ['User', 'PollOption', 'PollHistory']
        });
        res.json(polls);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// GET a single poll by ID
router.get('/:id', async (req, res) => {
    try {
        const poll = await Poll.findByPk(req.params.id, {
            include: ['User', 'PollOption', 'PollHistory']
        });
        if (poll) {
            res.json(poll);
        } else {
            res.status(404).send('Poll not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// POST to create a new poll
router.post('/', async (req, res) => {
    try {
        const poll = await Poll.create(req.body);
        res.status(201).json(poll);
    } catch (error) {
        res.status(500).send('Error creating poll');
    }
});

// PUT to update a poll
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Poll.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedPoll = await Poll.findByPk(req.params.id);
            res.json(updatedPoll);
        } else {
            res.status(404).send('Poll not found');
        }
    } catch (error) {
        res.status(500).send('Error updating poll');
    }
});

// DELETE a poll
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Poll.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).send('Poll not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
