const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const developer = require('./routes/developers')
const mongoose = require('mongoose')

app.use(function(req, res, next) {
    next()
})

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

mongoose.Promise = global.Promise
mongoose.connect('mongodb://devbase:devbase123@mongo_devbase:27017/devbase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conectado com sucesso'))
.catch((error) => {
    console.log('Erro ao conectar ao mongo db' + error)
})
app.use('/', developer)

const PORT = process.env.PORT || 3000;
app.listen(PORT)
