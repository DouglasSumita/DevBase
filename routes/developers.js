const express = require('express')
const router = express.Router()
const {validaCampos} = require('../controllers/validaDevelopers')
const {criaDevelopers} = require('../controllers/criaDevelopers')
const {processaDadosDeveloper} = require('../controllers/criaDevelopers')
const getArrayDevelopersTeste = require('../controllers/criaDevelopersTeste')
const mongoose = require('mongoose')
require('../models/Developer')
const Developer = mongoose.model('developer')

router.get('/developers', function(req, res) {
    Developer.find().sort({nome: 'desc'}).populate('developers').lean().then(function(developers) {
        res.status(200).send(developers)
    })
})

router.get('/developers/:id', function(req, res) {
    Developer.findById(req.params.id)
    .then((developer) => {
        res.status(200).send(developer)
    })
    .catch((error) => {
        res.status(404).send(error)
    })
})

router.post('/developers', function(req, res, next) {
    const error = validaCampos(req.body)
    if (error.isError()) {
        res.status(400).send(error.getMessage())
    } else {
        let error = criaDevelopers(req.body)
        if (error) {
            res.status(400).send(error)
        } else {
            res.status(201).send('')
        }
    }
})

router.put('/developers/:id', function(req, res) {
    const error = validaCampos(req.body)
    
    if (error.isError()) {
        res.status(400).send(error.getMessage)
    } else {
        let developerUpdate = processaDadosDeveloper(req.body)

        Developer.findByIdAndUpdate(req.params.id, developerUpdate).then(() => {
            res.status(200).send()
        }).catch(function(err) {
            res.status(400).send()
        })
    }    
})

router.delete('/developers/:id', function(req, res) {
    Developer.findByIdAndDelete(req.params.id).lean().then(function(developer) {
        res.status(204).send()
    }).catch(function(error) {
        res.status(400).send(error)
    })
})

// Cria uma lista de desenvolvedores no banco de dados para teste.
router.post('/create_developers_teste', function(req, res) {
    getArrayDevelopersTeste().forEach(criaDevelopers)
    res.status(201).send('')
})

module.exports = router