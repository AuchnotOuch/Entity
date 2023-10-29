const express = require('express');
const { Membership } = require('../../db/models');  // Adjust this if your path is different, hun!

const router = express.Router();

// GET method to retrieve all memberships
router.get('/', async (req, res) => {
    try {
        const memberships = await Membership.findAll({
            include: ['group', 'member']  // Because you need the drama!
        });
        res.json(memberships);
    } catch (error) {
        res.status(500).send('Uh-oh, server is being a diva ');
    }
});

// GET method to retrieve a membership by ID
router.get('/:id', async (req, res) => {
    try {
        const membership = await Membership.findByPk(req.params.id, {
            include: ['group', 'member']
        });
        if (membership) {
            res.json(membership);
        } else {
            res.status(404).send('Membership? Never heard of her! ');
        }
    } catch (error) {
        res.status(500).send('Server threw a tantrum ');
    }
});

// POST method to create a new membership
router.post('/', async (req, res) => {
    try {
        const { group_id, user_id } = req.body
        console.log("TEST")
        const membership = await Membership.create({ group_id, user_id });
        res.status(201).json(membership);
    } catch (error) {
        res.status(500).send({ error });
    }
});

// PUT method to update a membership
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Membership.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedMembership = await Membership.findByPk(req.params.id);
            res.json(updatedMembership);
        } else {
            res.status(404).send('Membership MIA, darling! 🕶️');
        }
    } catch (error) {
        res.status(500).send('The server is having a meltdown ');
    }
});

// DELETE method to strut away from a membership
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Membership.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).send("Membership? Bye, Felicia! ✌️");
        } else {
            res.status(404).send('Membership is playing hard to get, sweetie');
        }
    } catch (error) {
        res.status(500).send('Server drama continues');
    }
});

module.exports = router;
