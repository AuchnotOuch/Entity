const express = require('express');
const { Comment } = require('../../db/models');

const router = express.Router();

// Middleware to parse JSON requests
router.use(express.json());

// GET all comments
router.get('/', async (req, res) => {
    try {
        const comments = await Comment.findAll({
            include: [{ association: 'User' }, { association: 'Post' }]
        });
        res.json(comments);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// GET a single comment by ID
router.get('/:id', async (req, res) => {
    try {
        const comment = await Comment.findByPk(req.params.id, {
            include: [{ association: 'User' }, { association: 'Post' }]
        });
        if (comment) {
            res.json(comment);
        } else {
            res.status(404).send('Comment not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// POST to create a new comment
router.post('/', async (req, res) => {
    try {
        const comment = await Comment.create(req.body);
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).send('Error creating comment');
    }
});

// PUT to update a comment
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Comment.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedComment = await Comment.findByPk(req.params.id);
            res.json(updatedComment);
        } else {
            res.status(404).send('Comment not found');
        }
    } catch (error) {
        res.status(500).send('Error updating comment');
    }
});

// DELETE a comment
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Comment.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).send('Comment not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
