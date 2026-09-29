# CADASTRO DE USUARIOS 

## Descrição 
- Cadastros de usuarios

## FEATURES
- Listar todos os usuarios cadastrados
  - Nome 
  - CPF 
  - EMAIL
- Filtra por um unico cadastro 2 feature
  - Devo conseguir fazer uma chamada com um unico
  - Nome 
  - cpf 
  - email
  - E me retorna todos os dados

## COMO IMPLEMENTAR
- Via API rest me retornando um arquivo `JSON`
- Cadastro do usuario 
  - NOME 
  - CPF
  - EMAIL 
  - TELEFONE
  - CIDADE (UF)
- GET Retorna os dados

- RESPONSE

- Usuarios cadastrados
```js
[
  {
    "nome": "Caio Monteiro",
    "cpf": "482.731.960-15",
    "email": "caio.monteiro@example.com",
    "telefone": "(85) 98742-3160",
    "cidade": "Fortaleza",
    "uf": "CE"
  },
  {
    "nome": "Larissa Andrade",
    "cpf": "715.204.830-62",
    "email": "larissa.andrade@example.com",
    "telefone": "(11) 97631-8425",
    "cidade": "Campinas",
    "uf": "SP"
  }
]
 ```