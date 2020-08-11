const express = require('express')
const router = express.Router()

const db = require('../db-config')

router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ errorMessage: 'Failed to retrieve cars' })
    })
})

router.get('/:id', (req, res) => {
    
})

router.post('/', (req, res) => {
    const car = req.body;

    db('cars').insert(car)
    .then(ids => {
        db('cars').where({ id: ids[0] })
        .then(carEntry => {
            res.status(201).json(carEntry)
        })
    })
    .catch(error => {
        res.status(500).json({ errorMessage: 'Could not post car' })
    })
})





module.exports = router