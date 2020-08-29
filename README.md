# Projeto API - DevBase
API Criada em Node JS e MongoDB hospedada na Umbler.

## Requisitos:
* Internet para acessar o endpoint crado para API.
[Endpoint API - DevBase](http://mydevbaseapi-com.umbler.net/)

### Métodos criados:

##### GET /developers
* Retorna um array de objetos com todos os desenvolvedores
* Exemplo: http://mydevbaseapi-com.umbler.net/developers

##### GET /developers/{id}
* Retorna um objeto com os dados de um desenvolvedor
* Exemplo: http://mydevbaseapi-com.umbler.net/developers/5f4ab8fbbc7f07001b890cc3

##### POST /developers
* Adiciona um novo desenvolvedor
* Necessário passar um json com os campos:
* Exemplo: http://mydevbaseapi-com.umbler.net/developers/
`
body: {
  "nome": "TESTE",
  "sexo": "M",
  "hobby": "TESTE",
  "datanascimento": "12/01/1995"
}
`

#### PUT /developers/{id}
