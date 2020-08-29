const mongoose = require('mongoose')
require('../models/Developer')
const Developer = mongoose.model('developer')
const {calculaIdade} = require('./data')

function processaDadosDeveloper(developer) {
    return {
        nome: developer.nome,
        sexo: developer.sexo,
        idade: calculaIdade(developer.datanascimento),
        hobby: developer.hobby,
        datanascimento: developer.datanascimento
    }
}

function criaDevelopers(developer) {
    const novoDeveloper = processaDadosDeveloper(developer)
    new Developer(novoDeveloper).save().then().catch(error => error)
}

module.exports = { 
    criaDevelopers,
    processaDadosDeveloper
}    