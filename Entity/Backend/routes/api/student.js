const express = require('express');
const { Student } = require('../../db/models');

const router = express.Router();

// Middleware to parse JSON requests
router.use(express.json());

// GET all students
router.get('/', async (req, res) => {
    try {
        const students = await Student.findAll({
            include: ['Classroom', 'User']
        });
        res.json(students);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// GET a single student by ID
router.get('/:id', async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id, {
            include: ['Classroom', 'User']
        });
        if (student) {
            res.json(student);
        } else {
            res.status(404).send('Student not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// POST to create a new student
router.post('/', async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.status(201).json(student);
    } catch (error) {
        res.status(500).send('Error creating student');
    }
});

// PUT to update a student
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Student.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedStudent = await Student.findByPk(req.params.id);
            res.json(updatedStudent);
        } else {
            res.status(404).send('Student not found');
        }
    } catch (error) {
        res.status(500).send('Error updating student');
    }
});

// DELETE a student
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Student.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).send('Student not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
