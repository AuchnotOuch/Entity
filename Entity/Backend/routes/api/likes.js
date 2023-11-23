const express = require('express');
const { Like } = require('../../db/models');

const router = express.Router();

// Middleware to parse JSON requests
router.use(express.json());

// POST to create a new like
router.post('/', async (req, res) => {
    try {
        const like = await Like.create(req.body);
        res.status(201).json(like);
    } catch (error) {
        res.status(500).send('Error creating like');
    }
});

// DELETE a like
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Like.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).send('Like not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
