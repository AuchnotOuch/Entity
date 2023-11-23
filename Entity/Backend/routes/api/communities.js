const express = require('express');
const { Community } = require('../../db/models');

const router = express.Router();

// GET method to retrieve all communities
router.get('/', async (req, res) => {
    try {
        const communities = await Community.findAll();
        res.json(communities);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// GET method to retrieve a community by ID
router.get('/:id', async (req, res) => {
    try {
        const community = await Community.findByPk(req.params.id);
        if (community) {
            res.json(community);
        } else {
            res.status(404).send('Community not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// POST method to create a new community
router.post('/', async (req, res) => {
    try {
        const community = await Community.create(req.body);
        res.status(201).json(community);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// PUT method to update a community
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Community.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedCommunity = await Community.findByPk(req.params.id);
            res.json(updatedCommunity);
        } else {
            res.status(404).send('Community not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// DELETE method to delete a community
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Community.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).send("Community deleted");
        } else {
            res.status(404).send('Community not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;












module.exports = router
