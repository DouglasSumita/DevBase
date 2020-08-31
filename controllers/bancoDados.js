const mongoose = require('mongoose')

async function conectar() {
    mongoose.Promise = global.Promise
    try {
        await mongoose.connect('mongodb://devbase:devbase123@mongo_devbase:27017/devbase', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Conectado com sucesso')
    } catch(error) {
        console.log('Erro ao conectar ao mongo db' + error)
    }
}

module.exports = {
    conectar
}