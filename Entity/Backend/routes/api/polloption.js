const express = require('express');
const { PollOption } = require('../../db/models');

const router = express.Router();

// Middleware to parse JSON requests
router.use(express.json());

// GET all poll options
router.get('/', async (req, res) => {
    try {
        const pollOptions = await PollOption.findAll({
            include: ['Poll', 'PollHistory']
        });
        res.json(pollOptions);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// GET a single poll option by ID
router.get('/:id', async (req, res) => {
    try {
        const pollOption = await PollOption.findByPk(req.params.id, {
            include: ['Poll', 'PollHistory']
        });
        if (pollOption) {
            res.json(pollOption);
        } else {
            res.status(404).send('Poll option not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// POST to create a new poll option
router.post('/', async (req, res) => {
    try {
        const pollOption = await PollOption.create(req.body);
        res.status(201).json(pollOption);
    } catch (error) {
        res.status(500).send('Error creating poll option');
    }
});

// PUT to update a poll option
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await PollOption.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedPollOption = await PollOption.findByPk(req.params.id);
            res.json(updatedPollOption);
        } else {
            res.status(404).send('Poll option not found');
        }
    } catch (error) {
        res.status(500).send('Error updating poll option');
    }
});

// DELETE a poll option
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await PollOption.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).send('Poll option not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
