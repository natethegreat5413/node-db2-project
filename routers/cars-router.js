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





module.exports = router