const express = require('express');
const { Chat } = require('../../db/models');

const router = express.Router();

// Middleware to parse JSON requests
router.use(express.json());

// GET all chat records
router.get('/', async (req, res) => {
    try {
        const chats = await Chat.findAll({
            include: [{
                association: 'User',
                attributes: ['name']  // You can adjust the attributes as needed
            }]
        });
        res.json(chats);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// GET a single chat record by ID
router.get('/:id', async (req, res) => {
    try {
        const chat = await Chat.findByPk(req.params.id, {
            include: ['User']
        });
        if (chat) {
            res.json(chat);
        } else {
            res.status(404).send('Chat not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// POST to create a new chat record
router.post('/', async (req, res) => {
    try {
        const chat = await Chat.create(req.body);
        res.status(201).json(chat);
    } catch (error) {
        res.status(500).send('Error creating chat');
    }
});

// PUT to update a chat record
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Chat.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedChat = await Chat.findByPk(req.params.id);
            res.json(updatedChat);
        } else {
            res.status(404).send('Chat not found');
        }
    } catch (error) {
        res.status(500).send('Error updating chat');
    }
});

// DELETE a chat record
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Chat.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).send('Chat not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
