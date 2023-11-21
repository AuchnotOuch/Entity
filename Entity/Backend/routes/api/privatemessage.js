const express = require('express');
const { PrivateMessage } = require('../../db/models');

const router = express.Router();

// Middleware to parse JSON requests
router.use(express.json());

// GET all private messages
router.get('/', async (req, res) => {
    try {
        const privateMessages = await PrivateMessage.findAll();
        res.json(privateMessages);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// GET a single private message by ID
router.get('/:id', async (req, res) => {
    try {
        const privateMessage = await PrivateMessage.findByPk(req.params.id);
        if (privateMessage) {
            res.json(privateMessage);
        } else {
            res.status(404).send('Private message not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// POST to create a new private message
router.post('/', async (req, res) => {
    try {
        const privateMessage = await PrivateMessage.create(req.body);
        res.status(201).json(privateMessage);
    } catch (error) {
        res.status(500).send('Error creating private message');
    }
});

// DELETE a private message
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await PrivateMessage.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).send('Private message not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
