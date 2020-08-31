const app = require('express').Router()

app.get('/', (req, res) => {
    res.render('index')
})

module.exports = app