const express = require('express');
const { Spot } = require('../../db/models');

const router = express.Router();

// Middleware to parse JSON requests
router.use(express.json());

// GET all spots
router.get('/', async (req, res) => {
    try {
        const spots = await Spot.findAll({
            include: ['User', 'Place']
        });
        res.json(spots);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// GET a single spot by ID
router.get('/:id', async (req, res) => {
    try {
        const spot = await Spot.findByPk(req.params.id, {
            include: ['User', 'Place']
        });
        if (spot) {
            res.json(spot);
        } else {
            res.status(404).send('Spot not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// POST to create a new spot
router.post('/', async (req, res) => {
    try {
        const spot = await Spot.create(req.body);
        res.status(201).json(spot);
    } catch (error) {
        res.status(500).send('Error creating spot');
    }
});

// PUT to update a spot
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Spot.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedSpot = await Spot.findByPk(req.params.id);
            res.json(updatedSpot);
        } else {
            res.status(404).send('Spot not found');
        }
    } catch (error) {
        res.status(500).send('Error updating spot');
    }
});

// DELETE a spot
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Spot.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).send('Spot not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
