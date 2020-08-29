const mongoose = require('mongoose')

const DeveloperSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    sexo: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
    },
    hobby: {
        type: String
    },
    datanascimento: {
        type: Date,
        require: true
    }
})

mongoose.model('developer', DeveloperSchema)

module.exports = mongoose