const express = require('express');
const { Place } = require('../../db/models');

const router = express.Router();

// Middleware to parse JSON requests
router.use(express.json());

// GET all places
router.get('/', async (req, res) => {
    try {
        const places = await Place.findAll({
            include: ['User', 'Spot']
        });
        res.json(places);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// GET a single place by ID
router.get('/:id', async (req, res) => {
    try {
        const place = await Place.findByPk(req.params.id, {
            include: ['User', 'Spot']
        });
        if (place) {
            res.json(place);
        } else {
            res.status(404).send('Place not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// POST to create a new place
router.post('/', async (req, res) => {
    try {
        const place = await Place.create(req.body);
        res.status(201).json(place);
    } catch (error) {
        res.status(500).send('Error creating place');
    }
});

// PUT to update a place
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Place.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedPlace = await Place.findByPk(req.params.id);
            res.json(updatedPlace);
        } else {
            res.status(404).send('Place not found');
        }
    } catch (error) {
        res.status(500).send('Error updating place');
    }
});

// DELETE a place
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Place.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).send('Place not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
