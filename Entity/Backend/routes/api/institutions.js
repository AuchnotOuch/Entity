const express = require('express')
const { Institution } = require('../../db/models')


const router = express.Router()


// GET method to retrieve an institution by ID
router.get('/:id', async (req, res) => {
    try {
        const institution = await Institution.findByPk(req.params.id);
        if (institution) {
            res.json(institution);
        } else {
            res.status(404).send('Institution not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// POST method to create a new institution
router.post('/', async (req, res) => {
    try {
        const institution = await Institution.create(req.body);
        res.status(201).json(institution);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// PUT method to update an institution
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Institution.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedInstitution = await Institution.findByPk(req.params.id);
            res.json(updatedInstitution);
        } else {
            res.status(404).send('Institution not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// DELETE method to delete an institution
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Institution.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).send("Institution deleted");
        } else {
            res.status(404).send('Institution not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});


module.exports = router
