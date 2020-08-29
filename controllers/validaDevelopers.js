const error = require('./error')
const validaObjeto = require('./validaObjeto')
const Error = require('./error')
const data = require('./data')

const atributosObrigatorios = ['nome', 'sexo', 'datanascimento']
const tamanhoMinimoNome = 3

function stringVazia(string) {
    return (string.length === 0 || !string.trim())
}

function stringTamanhoValido(string, tamanho) {
    return string.trim().length >= tamanho
}

function nomeValido(nome) {
    return (!stringVazia(nome) && stringTamanhoValido(nome, tamanhoMinimoNome))
}

function isSexoMasculino(sexo) {
    return sexo.trim() === 'M'
}

function isSexoFeminino(sexo) {
    return sexo.trim() === 'F'
}

function sexoValido(sexo) {
    return (isSexoMasculino(sexo) || isSexoFeminino(sexo) || stringVazia(sexo)) //StringVazia (sexo nao informado, não obrigatório ser Masculino ou Feminino)
}

function stringToData(stringData) {
    let data

    if (!stringVazia(stringData)) {
        data = new Date(stringData)
    }

    return data
}

function dataMenorQueDataAtual(data) {
    return data < new Date()
}

function dataNascimentoValido(dataNascimento) {
    let data = stringToData(dataNascimento)

    return (!isNaN(data) && dataMenorQueDataAtual(data))
}

function validaCampos(developer = {}) {
    
    const atributosFaltantes = validaObjeto.atributosFaltantes(atributosObrigatorios, Object.keys(developer))
    const error = new Error()

    if (atributosFaltantes.length > 0) {
        error.setMessage('Atributos obrigatorios: ' + atributosFaltantes.toString())
        return error
    }

    if (!nomeValido(developer.nome)) {
        error.concatMessage('Nome invalido: ' + developer.nome)
    }

    if (!sexoValido(developer.sexo)) {
        error.concatMessage('Sexo invalido: ' + developer.sexo)
    }

    if (!dataNascimentoValido(developer.datanascimento)) {
        error.concatMessage('Data Nascimento inválido: ', developer.datanascimento)
    }

    return error

}

module.exports = { 
    validaCampos 
}
