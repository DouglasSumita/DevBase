API Criada em Node JS e MongoDB hospedada na Umbler.

## Requisitos:
* Internet para acessar o endpoint criado para API.
* Utilizar Postman para realizar as requisicoes
* ** OFFLINE ** [Endpoint API - DevBase](http://mydevbaseapi-com.umbler.net/) 
* `http://mydevbaseapi-com.umbler.net/`

### Observação: A pasta "node_modules" esta sendo utilizado na umbler, por isso esta sendo necessário enviar para o Repositório.

## Campos obrigatorios e validacoes nos posts/put

| Campos         | tipo   |
|----------------|--------|
| nome           | string |
| sexo           | string |
| idade          | number |
| hobby          | string |
| dataNascimento | date   |

* nome (maior que 2)
* datanascimento (menor que a data de hoje, aceita 'DD/MM/AAAA' ou 'DD-MM-AAAA') 
* sexo ('M', 'F', ' ')
* A idade não foi permitida o envio via requisicoes para que possa ser calculada de acordo com a "datanascimento" antes de gravar no banco.
* campo Hobby não é obrigatorio.

## Métodos criados:

#### GET /developers
* Retorna um array de objetos com todos os desenvolvedores
* Exemplo: http://mydevbaseapi-com.umbler.net/developers
* Retorno: 200 Sucesso


#### GET /developers/{id}
* Retorna um objeto com os dados de um desenvolvedor
* Exemplo: http://mydevbaseapi-com.umbler.net/developers/5f4ab8fbbc7f07001b890cc3
* Retorno: 200 Sucesso / 404 Erro


#### POST /developers
* Adiciona um novo desenvolvedor
* Necessário passar um json com os campos:
* Exemplo: http://mydevbaseapi-com.umbler.net/developers/
* Retorno: 201 Criado / 400 Erro
* Body:
`
{
  "nome": "TESTE",
  "sexo": "M",
  "hobby": "TESTE",
  "datanascimento": "12/01/1995"
}
`

#### POST /create_developers_teste/
* Adiciona 5 Registros de desenvolvedores com dados aleatoriamente.
* Exemplo: http://mydevbaseapi-com.umbler.net/create_developers_teste/
* Retorno: 201 Criado 


#### PUT /developers/{id}
* Atualiza os dados de um desenvolvedor
* Necessario passar a ID do desenvolvedor no banco no endpoint e os dados do desenvolvedor a serem atualizados (mesma validação do post de cadastro)
* Exemplo: http://mydevbaseapi-com.umbler.net/developers/5f4ab8fbbc7f07001b890cc3
* Retorno: 201 Criado / 400 Erro
* Body:
`
{
  "nome": "TESTE",
  "sexo": "M",
  "hobby": "TESTE",
  "datanascimento": "12/01/1995"
}
`

#### DELETE /developers/{id}
* Apaga o registro de um desenvolvedor
* Necessário passar o id referente ao desenvolvedor no endpoint
* Exemplo: http://mydevbaseapi-com.umbler.net/developers/5f4ab8fbbc7f07001b890cc3
* Retorno: 204 Sem conteudo / 400 Erro
