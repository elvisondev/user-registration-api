# CADASTRO DE USUÁRIOS

## DESCRIÇÃO

API REST para consulta de usuários cadastrados.

A aplicação permite listar todos os usuários disponíveis e realizar buscas por nome, utilizando uma base de dados em arquivo JSON.

---

## FEATURES

### 1. Listar usuários cadastrados

- Listar todos os usuários disponíveis
- Retornar os dados cadastrados de cada usuário:
  - Nome
  - CPF
  - Email
  - Telefone
  - Cidade
  - UF

### 2. Buscar usuários por nome

- Buscar usuários através do nome
- Aceitar buscas por nomes parciais
- Retornar todas as correspondências encontradas
- Ignorar diferenças entre letras maiúsculas e minúsculas
- Validar se o parâmetro `name` foi informado
- Retornar `400 Bad Request` quando o parâmetro `name` estiver vazio

---

## COMO FOI IMPLEMENTADO

- API REST utilizando Node.js e TypeScript
- Servidor HTTP utilizando módulo nativo do Node.js
- Dados armazenados em arquivo JSON
- Requisições utilizando método `GET`
- Separação da aplicação em:
  - Routes
  - Controllers
  - Services
  - Repositories
  - Models
  - Utils

### Fluxo da aplicação

```text
Request
   ↓
App / Routes
   ↓
Controller
   ↓
Service
   ↓
Repository
   ↓
JSON / Data
```

A resposta percorre o fluxo de volta até ser enviada ao cliente.

---

## ROTAS

### Listar usuários

```http
GET /api/list
```

Retorna todos os usuários cadastrados.

### Buscar usuários por nome

```http
GET /api/name?name=Caio
```

A busca aceita nomes parciais e não diferencia letras maiúsculas e minúsculas.

Exemplos de busca:

```text
Caio
caio
CAIO
Larissa
rafael
```

Caso existam vários usuários com o mesmo primeiro nome, todas as correspondências são retornadas.

---

## RESPONSE

Os usuários são representados no seguinte formato:

```json
[
  {
    "name": "Caio Monteiro",
    "cpf": "482.731.960-15",
    "email": "caio.monteiro@example.com",
    "telephone": "(85) 98742-3160",
    "city": "Fortaleza",
    "uf": "CE"
  }
]
```

### Status utilizados

- `200 OK` — requisição realizada com sucesso
- `204 No Content` — busca realizada sem correspondências
- `400 Bad Request` — parâmetro `name` não informado
- `500 Internal Server Error` — erro interno da aplicação

---

## COMO TESTAR

### Listar todos os usuários

```http
GET http://localhost:3330/api/list
```

### Buscar por nome

```http
GET http://localhost:3330/api/name?name=Caio
```

### Busca sem diferença entre maiúsculas e minúsculas

```http
GET http://localhost:3330/api/name?name=caio
```

### Parâmetro obrigatório não informado

```http
GET http://localhost:3330/api/name
```

Retorna:

```text
400 Bad Request
```

---

## FEATURES PENDENTES

- Implementar `404 Not Found` quando nenhuma correspondência for encontrada
- Retornar uma mensagem informando qual nome não foi encontrado
- Melhorar o refinamento da busca por usuários
- Avaliar busca utilizando nome e sobrenome
- Revisar e melhorar a modelagem dos dados.