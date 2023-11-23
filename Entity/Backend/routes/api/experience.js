const express = require('express');
const { Experience } = require('../../db/models');

const router = express.Router();

// Middleware to parse JSON requests
router.use(express.json());

// GET all experiences
router.get('/', async (req, res) => {
    try {
        const experiences = await Experience.findAll({
            include: ['Participant', 'User']
        });
        res.json(experiences);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// GET a single experience by ID
router.get('/:id', async (req, res) => {
    try {
        const experience = await Experience.findByPk(req.params.id, {
            include: ['Participant', 'User']
        });
        if (experience) {
            res.json(experience);
        } else {
            res.status(404).send('Experience not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// POST to create a new experience
router.post('/', async (req, res) => {
    try {
        const experience = await Experience.create(req.body);
        res.status(201).json(experience);
    } catch (error) {
        res.status(500).send('Error creating experience');
    }
});

// PUT to update an experience
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Experience.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedExperience = await Experience.findByPk(req.params.id);
            res.json(updatedExperience);
        } else {
            res.status(404).send('Experience not found');
        }
    } catch (error) {
        res.status(500).send('Error updating experience');
    }
});

// DELETE an experience
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Experience.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).send('Experience not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
