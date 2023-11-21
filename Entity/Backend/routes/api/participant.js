const express = require('express');
const { Participant } = require('../../db/models');

const router = express.Router();

// Middleware to parse JSON requests
router.use(express.json());

// GET all participants
router.get('/', async (req, res) => {
    try {
        const participants = await Participant.findAll({
            include: ['Experience', 'User']
        });
        res.json(participants);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// GET a single participant by ID
router.get('/:id', async (req, res) => {
    try {
        const participant = await Participant.findByPk(req.params.id, {
            include: ['Experience', 'User']
        });
        if (participant) {
            res.json(participant);
        } else {
            res.status(404).send('Participant not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// POST to create a new participant
router.post('/', async (req, res) => {
    try {
        const participant = await Participant.create(req.body);
        res.status(201).json(participant);
    } catch (error) {
        res.status(500).send('Error creating participant');
    }
});

// PUT to update a participant
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Participant.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedParticipant = await Participant.findByPk(req.params.id);
            res.json(updatedParticipant);
        } else {
            res.status(404).send('Participant not found');
        }
    } catch (error) {
        res.status(500).send('Error updating participant');
    }
});

// DELETE a participant
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Participant.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).send('Participant not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
