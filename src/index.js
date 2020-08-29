
function getDesenvolvedores() {
    const conteudoDiv = document.getElementById("listarDesenvolvedores").innerHTML

    if (conteudoDiv.trim().length > 0) {
        document.getElementById("listarDesenvolvedores").innerHTML = ''
    } else {
        const url = "http://mydevbaseapi-com.umbler.net/developers"
        var xhttp = new XMLHttpRequest()
        xhttp.open("GET", url, false)
        xhttp.send()
        document.getElementById("listarDesenvolvedores").innerHTML = xhttp.responseText
    }
}
