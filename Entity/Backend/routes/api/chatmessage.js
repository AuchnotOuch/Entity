const express = require('express');
const { ChatMessage } = require('../../db/models');

const router = express.Router();

// Middleware to parse JSON requests
router.use(express.json());

// GET all chat messages
router.get('/', async (req, res) => {
    try {
        const chatMessages = await ChatMessage.findAll({
            include: ['Chat', 'User']
        });
        res.json(chatMessages);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// GET a single chat message by ID
router.get('/:id', async (req, res) => {
    try {
        const chatMessage = await ChatMessage.findByPk(req.params.id, {
            include: ['Chat', 'User']
        });
        if (chatMessage) {
            res.json(chatMessage);
        } else {
            res.status(404).send('Chat message not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// POST to create a new chat message
router.post('/', async (req, res) => {
    try {
        const chatMessage = await ChatMessage.create(req.body);
        res.status(201).json(chatMessage);
    } catch (error) {
        res.status(500).send('Error creating chat message');
    }
});

// PUT to update a chat message
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await ChatMessage.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedChatMessage = await ChatMessage.findByPk(req.params.id);
            res.json(updatedChatMessage);
        } else {
            res.status(404).send('Chat message not found');
        }
    } catch (error) {
        res.status(500).send('Error updating chat message');
    }
});

// DELETE a chat message
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await ChatMessage.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).send('Chat message not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
