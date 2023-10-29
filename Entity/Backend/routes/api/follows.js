const express = require('express');
const { Follow } = require('../../db/models');

const router = express.Router();

// GET all follow records
router.get('/', async (req, res) => {
    try {
        const follows = await Follow.findAll({
            include: ['follower', 'followee']
        });
        res.json(follows);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// GET a single follow record by ID
router.get('/:id', async (req, res) => {
    try {
        const follow = await Follow.findByPk(req.params.id, {
            include: ['follower', 'followee']
        });
        if (follow) {
            res.json(follow);
        } else {
            res.status(404).send('Follow record not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// POST to add a new follow record
router.post('/', async (req, res) => {
    try {
        const follow = await Follow.create(req.body);
        res.status(201).json(follow);
    } catch (error) {
        res.status(500).send('Error adding follow record');
    }
});

// PUT to update a follow record
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Follow.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedFollow = await Follow.findByPk(req.params.id, {
                include: ['follower', 'followee']
            });
            res.json(updatedFollow);
        } else {
            res.status(404).send('Follow record not found');
        }
    } catch (error) {
        res.status(500).send('Error updating follow record');
    }
});

// DELETE a follow record
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Follow.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).send('Follow record not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
