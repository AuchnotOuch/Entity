const express = require('express');
const { Group } = require('../../db/models');

const router = express.Router();

// GET method to retrieve all groups
router.get('/', async (req, res) => {
    try {
        const groups = await Group.findAll();
        res.json(groups);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// GET method to retrieve a group by ID
router.get('/:id', async (req, res) => {
    try {
        const group = await Group.findByPk(req.params.id);
        if (group) {
            res.json(group);
        } else {
            res.status(404).send('Group not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// POST method to create a new group
router.post('/', async (req, res) => {
    try {
        const group = await Group.create(req.body);
        res.status(201).json(group);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// PUT method to update a group
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Group.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedGroup = await Group.findByPk(req.params.id);
            res.json(updatedGroup);
        } else {
            res.status(404).send('Group not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// DELETE method to delete a group
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Group.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).send("Group deleted");
        } else {
            res.status(404).send('Group not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router
