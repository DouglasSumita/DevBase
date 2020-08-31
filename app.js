const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const rotaDevelopers = require('./routes/developers')
const rotaIndex = require('./routes/index')
const bancoDados = require('./controllers/bancoDados')

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.set('view engine', 'ejs')

bancoDados.conectar()

app.use('/', rotaIndex)
app.use('/', rotaDevelopers)

const PORT = process.env.PORT || 3000;
app.listen(PORT)