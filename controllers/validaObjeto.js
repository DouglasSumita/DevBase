function atributosFaltantes(camposObrigatorios = [], camposRecebidos) {

    let atributosFaltantes = []

    if (camposObrigatorios.length > 0) {
        atributosFaltantes = camposObrigatorios.filter(function (campo) {
            return (camposRecebidos.indexOf(campo) < 0)
        })
    }
    
    return atributosFaltantes
}   

module.exports = {
    atributosFaltantes
}