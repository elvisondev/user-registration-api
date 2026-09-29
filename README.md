# 👤 Cadastro de Usuários

API desenvolvida com **Node.js** e **TypeScript** para consulta de usuários cadastrados.

O projeto foi criado com foco no estudo de desenvolvimento back-end, utilizando módulos nativos do Node.js para criação do servidor HTTP e uma arquitetura organizada em **controllers, services, repositories e models**.

Os dados dos usuários são armazenados localmente em um arquivo JSON.

---

## 📋 Funcionalidades

### Listar usuários

Permite consultar todos os usuários cadastrados.

Cada cadastro contém informações como:

- Nome
- CPF
- E-mail
- Telefone
- Cidade
- UF

### Buscar usuário por nome

Permite filtrar os usuários cadastrados através do nome informado na requisição.

A busca atualmente:

- Aceita nomes completos ou parciais;
- Ignora diferenças entre letras maiúsculas e minúsculas;
- Retorna todas as correspondências encontradas;
- Valida se o parâmetro `name` foi informado;
- Retorna `400 Bad Request` quando o parâmetro `name` não é informado.

---

## 🌐 Endpoints

### Listar todos os usuários

```http
GET /api/list
```

Exemplo de resposta:

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

### Buscar usuário por nome

```http
GET /api/name?name=Caio
```

A busca pode retornar uma ou mais correspondências para o nome informado.

Exemplo de resposta:

```json
[
  {
    "name": "Caio Monteiro",
    "cpf": "482.731.960-15",
    "email": "caio.monteiro@example.com",
    "telephone": "(85) 98742-3160",
    "city": "Fortaleza",
    "uf": "CE"
  },
  {
    "name": "Caio Fernandes",
    "cpf": "603.175.920-48",
    "email": "caio.fernandes@example.com",
    "telephone": "(21) 99234-7185",
    "city": "Niterói",
    "uf": "RJ"
  }
]
```

Caso o parâmetro `name` não seja informado, a API retorna:

```http
400 Bad Request
```

---

## 🏗️ Estrutura do projeto

```text
.
├── docs/
│   ├── app.md
│   └── app.io
│
├── src/
│   ├── controllers/
│   │   └── controller.ts
│   │
│   ├── models/
│   │   ├── register-model.ts
│   │   └── register-transfer-model.ts
│   │
│   ├── repositories/
│   │   ├── register-user.ts
│   │   └── registers.json
│   │
│   ├── routes/
│   │   ├── paths.ts
│   │   └── routes.ts
│   │
│   ├── services/
│   │   ├── user-list-service.ts
│   │   └── user-register-service.ts
│   │
│   ├── utils/
│   │   ├── http-methods.ts
│   │   └── status-code.ts
│   │
│   ├── app.ts
│   └── server.ts
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

### Responsabilidades

- **Controllers:** recebem as chamadas da aplicação e coordenam a resposta HTTP.
- **Services:** concentram o fluxo da aplicação e a montagem das respostas.
- **Repositories:** realizam o acesso e a filtragem dos dados armazenados no JSON.
- **Models:** definem os tipos e contratos utilizados pela aplicação.
- **Routes:** centralizam as rotas utilizadas pela API, incluindo `/api/list` e `/api/name`.
- **Utils:** contém estruturas reutilizáveis, como métodos HTTP e códigos de status.
- **Docs:** reúne a documentação das especificações, funcionamento e arquitetura da aplicação.

---

## 📚 Documentação

O projeto possui uma documentação complementar na pasta `docs/`:

- `app.md` — contém as especificações da aplicação, funcionalidades, regras, rotas, comportamentos esperados e melhorias planejadas.
- `app.io` — contém a representação visual da arquitetura e do fluxo da aplicação.

---

## ♻️ Refatorações realizadas

Durante o desenvolvimento, alguns pontos da estrutura e do fluxo da aplicação foram aprimorados:

- Separação e organização das rotas em `src/routes`;
- Centralização das rotas `/api/list` e `/api/name`;
- Refatoração do fluxo entre `app`, controller, service e repository;
- Validação do parâmetro `name` na busca de usuários;
- Busca por nome aprimorada para aceitar correspondências parciais e ignorar diferenças entre letras maiúsculas e minúsculas;
- Organização da documentação técnica na pasta `docs`.mplementar sobre o funcionamento e integração da API.

---

## 🛠️ Tecnologias utilizadas

- [Node.js](https://nodejs.org/) — ambiente de execução JavaScript utilizado pela aplicação.
- [TypeScript](https://www.typescriptlang.org/) — linguagem utilizada no desenvolvimento da API com tipagem estática.
- [@types/node](https://www.npmjs.com/package/@types/node) — definições de tipos do Node.js para TypeScript.
- [TSX](https://tsx.is/) — execução de arquivos TypeScript durante o desenvolvimento.
- [tsup](https://tsup.egoist.dev/) — ferramenta utilizada no processo de build do projeto.

---

## 🚀 Executando o projeto

### 1. Clone o repositório

```bash
git clone <URL_DO_REPOSITORIO>
```

### 2. Acesse o diretório do projeto

```bash
cd <NOME_DO_PROJETO>
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute em modo de desenvolvimento

```bash
npm run dev
```

### 5. Execute em modo watch

Reinicia automaticamente a aplicação quando alterações são realizadas nos arquivos:

```bash
npm run dev:watch
```

### 6. Gere a build do projeto

```bash
npm run dist
```

A build é gerada utilizando o **tsup**.

### 7. Execute a aplicação após a build

```bash
npm run start:dist
```

### Scripts disponíveis

| Script | Descrição |
| --- | --- |
| `npm run dev` | Executa a aplicação diretamente com TSX |
| `npm run dev:watch` | Executa em modo watch durante o desenvolvimento |
| `npm run dist` | Gera a build utilizando tsup |
| `npm run start:dist` | Gera a build e executa a aplicação |

Para desenvolvimento, utilize o script correspondente configurado no projeto.

---

## 📚 Documentação

A documentação complementar sobre a proposta, integração e funcionamento da aplicação está disponível em:

```text
docs/app.md
```

---

## 🔄 Fluxo da aplicação

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
JSON
   ↓
Repository
   ↓
Service
   ↓
Controller
   ↓
Response
```

A separação das responsabilidades facilita a manutenção, compreensão e evolução da aplicação.

---

## 🚧 Melhorias planejadas

O projeto está em desenvolvimento e poderá receber melhorias como:

- Implementar tratamento específico quando nenhum usuário corresponder à busca;
- Implementar `404 Not Found` para buscas sem correspondência;
- Melhorar a estratégia de busca por nome e sobrenome;
- Tratar rotas não encontradas;
- Expandir os endpoints da API.

---

## 📄 Licença

Este projeto foi desenvolvido para fins de **estudo e aprendizado**, com foco na prática de desenvolvimento back-end utilizando Node.js e TypeScript.