const express = require('express');
const { Classroom } = require('../../db/models');

const router = express.Router();

// Middleware to parse JSON requests
router.use(express.json());

// GET all classrooms
router.get('/', async (req, res) => {
    try {
        const classrooms = await Classroom.findAll({
            include: [{ association: 'Student' }, { association: 'User' }]
        });
        res.json(classrooms);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// GET a single classroom by ID
router.get('/:id', async (req, res) => {
    try {
        const classroom = await Classroom.findByPk(req.params.id, {
            include: [{ association: 'Student' }, { association: 'User' }]
        });
        if (classroom) {
            res.json(classroom);
        } else {
            res.status(404).send('Classroom not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// POST to create a new classroom
router.post('/', async (req, res) => {
    try {
        const classroom = await Classroom.create(req.body);
        res.status(201).json(classroom);
    } catch (error) {
        res.status(500).send('Error creating classroom');
    }
});

// PUT to update a classroom
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Classroom.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedClassroom = await Classroom.findByPk(req.params.id);
            res.json(updatedClassroom);
        } else {
            res.status(404).send('Classroom not found');
        }
    } catch (error) {
        res.status(500).send('Error updating classroom');
    }
});

// DELETE a classroom
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Classroom.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).send('Classroom not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
