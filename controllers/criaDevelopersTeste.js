function montaStringAleatoria() {
    let string = ''
    for(let i = 0; i < 10; i++) {
        string += String.fromCharCode(Math.round(Math.random() * 9) + 70)
    }
    return string
}

function getAnoRandom() {
    return Math.round(Math.random() * 9) + 1985
}

function getSexoRandom() {
    let sexo = 'F'
    if (Math.round(Math.random() * 5 + 1)  > 5) {
        sexo = 'M'
    }
    return sexo
}

function developerTeste() {
    return {
        nome: montaStringAleatoria(),
        sexo: getSexoRandom(),
        hobby: montaStringAleatoria(),
        datanascimento: '12-01-' + getAnoRandom().toString()
    }
}

function getArrayDevelopersTeste(quantidade = 5) {
    const developers = []
    for(let i = 0; i < quantidade; i++) {
        developers.push(developerTeste())
    }
    return developers
}

module.exports = getArrayDevelopersTeste
