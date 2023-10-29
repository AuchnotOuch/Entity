const express = require('express');
const { Enrollment } = require('../../db/models');

const router = express.Router();

// GET all enrollments
router.get('/', async (req, res) => {
    try {
        const enrollments = await Enrollment.findAll({
            include: ['institution', 'member']
        });
        res.json(enrollments);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// GET a single enrollment by ID
router.get('/:id', async (req, res) => {
    try {
        const enrollment = await Enrollment.findByPk(req.params.id, {
            include: ['institution', 'member']
        });
        if (enrollment) {
            res.json(enrollment);
        } else {
            res.status(404).send('Enrollment not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// POST to add a new enrollment
router.post('/', async (req, res) => {
    try {
        const enrollment = await Enrollment.create(req.body);
        res.status(201).json(enrollment);
    } catch (error) {
        res.status(500).send('Error adding enrollment');
    }
});

// PUT to update an enrollment
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Enrollment.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedEnrollment = await Enrollment.findByPk(req.params.id);
            res.json(updatedEnrollment);
        } else {
            res.status(404).send('Enrollment not found');
        }
    } catch (error) {
        res.status(500).send('Error updating enrollment');
    }
});

// DELETE an enrollment
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Enrollment.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).send('Enrollment not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
