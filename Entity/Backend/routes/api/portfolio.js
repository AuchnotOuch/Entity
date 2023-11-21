const express = require('express');
const { Portfolio } = require('../../db/models');

const router = express.Router();

// Middleware to parse JSON requests
router.use(express.json());

// GET all portfolios
router.get('/', async (req, res) => {
    try {
        const portfolios = await Portfolio.findAll({
            include: ['User']
        });
        res.json(portfolios);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// GET a single portfolio by ID
router.get('/:id', async (req, res) => {
    try {
        const portfolio = await Portfolio.findByPk(req.params.id, {
            include: ['User']
        });
        if (portfolio) {
            res.json(portfolio);
        } else {
            res.status(404).send('Portfolio not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// POST to create a new portfolio
router.post('/', async (req, res) => {
    try {
        const portfolio = await Portfolio.create(req.body);
        res.status(201).json(portfolio);
    } catch (error) {
        res.status(500).send('Error creating portfolio');
    }
});

// PUT to update a portfolio
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Portfolio.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedPortfolio = await Portfolio.findByPk(req.params.id);
            res.json(updatedPortfolio);
        } else {
            res.status(404).send('Portfolio not found');
        }
    } catch (error) {
        res.status(500).send('Error updating portfolio');
    }
});

// DELETE a portfolio
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Portfolio.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).send('Portfolio not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
