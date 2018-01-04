const express = require('express')
const router = express.Router()

const { Creature } = require('../db/schema.js')

// Index Route
router.get('/', async (req, res) => {
    try {
        const creatures = await Creature.find({})
        res.json(creatures)
    } catch (err) {
        console.log(err)
    }
})

// Show Route
router.get('/:id', async (req, res) => {
    try {
        const creatureId = req.params.id
        const creature = await Creature.findById(creatureId)
        res.json(creature)
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

