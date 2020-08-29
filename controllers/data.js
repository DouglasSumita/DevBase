function getPartsData(dataString) {
    let dataArray = []

    if (dataString.indexOf('/') != -1) {
        dataArray = dataString.split('/')
    } else if(dataString.indexOf('-') != -1) {
        dataArray = dataString.split('-')
    }

    return dataArray
}

function mesIgual(mesA, mesB) {
    return mesA == mesB
}

function diaMenor(diaA, diaB) {
    return diaA < diaB
}

function calculaIdade(dataNascimento) {
    let dataAtual = new Date();
    let diaAtual = dataAtual.getDate()
    let anoAtual = dataAtual.getFullYear();
    let mesAtual = dataAtual.getMonth() + 1;
    let anoNascParts = getPartsData(dataNascimento);
    let diaNasc = anoNascParts[0];
    let mesNasc = anoNascParts[1];
    let anoNasc = anoNascParts[2];
    let idade = anoAtual - anoNasc;

    if (mesAtual < mesNasc || (mesIgual(mesAtual, mesNasc) &&  diaMenor(diaAtual, diaNasc))) {
        idade--;
    }

    return idade;
}


module.exports = {
    getPartsData,
    mesIgual,
    diaMenor,
    calculaIdade
}