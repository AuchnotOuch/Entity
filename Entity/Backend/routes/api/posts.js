const express = require('express');
const { Post } = require('../../db/models');

const router = express.Router();

// Middleware to parse JSON requests
router.use(express.json());

// GET all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.findAll({
            include: ['User', 'Like', 'Comment']
        });
        res.json(posts);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// GET a single post by ID
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id, {
            include: ['User', 'Like', 'Comment']
        });
        if (post) {
            res.json(post);
        } else {
            res.status(404).send('Post not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// POST to create a new post
router.post('/', async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.status(201).json(post);
    } catch (error) {
        res.status(500).send('Error creating post');
    }
});

// PUT to update a post
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Post.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedPost = await Post.findByPk(req.params.id);
            res.json(updatedPost);
        } else {
            res.status(404).send('Post not found');
        }
    } catch (error) {
        res.status(500).send('Error updating post');
    }
});

// DELETE a post
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Post.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).send('Post not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
