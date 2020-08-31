const mongoose = require('mongoose')
require('../models/Developer')
const Developer = mongoose.model('developer')
const {calculaIdade} = require('./data')
const {validaCampos} = require('./validaDevelopers')
const getArrayDevelopersTeste = require('./criaDevelopersTeste')
const error = require('./error')

function processaDados(developer) {
    return {
        nome: developer.nome,
        sexo: developer.sexo,
        idade: calculaIdade(developer.datanascimento),
        hobby: developer.hobby,
        datanascimento: developer.datanascimento
    }
}

async function novo(res, developer) {
    try {
        await new Developer(processaDados(developer)).save()
        res.status(201).send()
    } catch(error) {
        res.status(400).send(error)
    }
}

async function atualiza(req, res, developer) {
    try {
        await Developer.findByIdAndUpdate(req.params.id, developer)
        res.status(200).send()
    } catch(error) {
        res.status(400).send(error)
    }
}

async function buscaTodos(req, res) {
    try {
        const developers = await Developer.find().sort({nome: 'desc'}).populate('developers').lean()
        res.status(200).send(developers)
    } catch(error) {
        res.status(400).send(error)
    }    
}

async function buscaPorID(req, res) {
    try {
        const developer = await Developer.findById(req.params.id)
        res.status(200).send(developer)
    } catch(error) {
        res.status(404).send(error)
    }
}

async function deletePorID(req, res) {
    try {
        await Developer.findByIdAndDelete(req.params.id).lean()
        res.status(204).send()
    } catch(error) {
        res.status(400).send(error)
    }
}

function validaCamposECria(req, res) {
    const error = validaCampos(req.body)
    
    if (error) {
        res.status(400).send(error)
    } else {
        novo(res, req.body)
    }
}

function validaCamposEAtualiza(req, res) {
    const error = validaCampos(req.body)

    if (error) {
        res.status(400).send(error.getMessage())
    } else {
        atualiza(req, res, processaDados(req.body))
    }
}

async function criaDevelopersTeste(req, res) {
    const developersTeste = getArrayDevelopersTeste()
    
    for (let i = 0; i < developersTeste.length; i++) {
        try {
            await new Developer(developersTeste[i]).save()
        } catch(error) {
            return res.status(400).send(error)
        }
    }
    res.status(201).send()  
}

module.exports = { 
    buscaTodos,
    buscaPorID,
    validaCamposECria,
    validaCamposEAtualiza,
    deletePorID,
    criaDevelopersTeste
}    
