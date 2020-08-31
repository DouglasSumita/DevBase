const app = require('express').Router()
const developers = require('../controllers/developers')

app.get('/developers', developers.buscaTodos)

app.get('/developers/:id', developers.buscaPorID)

app.post('/developers', developers.validaCamposECria)

app.put('/developers/:id', developers.validaCamposEAtualiza)

app.delete('/developers/:id', developers.deletePorID)

app.post('/create_developers_teste', developers.criaDevelopersTeste)

module.exports = app