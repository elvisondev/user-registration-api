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

> A busca por nome está em desenvolvimento e poderá receber melhorias na estratégia de filtragem.

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
    "telefone": "(85) 98742-3160",
    "cidade": "Fortaleza",
    "uf": "CE"
  }
]
```

### Buscar usuário por nome

```http
GET /api/name?name=Rafael
```

Exemplo de resposta:

```json
[
  {
    "name": "Rafael",
    "cpf": "394.628.150-07",
    "email": "rafael@example.com",
    "telefone": "(85) 99124-5837",
    "cidade": "Fortaleza",
    "uf": "CE"
  }
]
```

---

## 🏗️ Estrutura do projeto

```text
.
├── docs/
│   └── app.md
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
│   │   └── paths.ts
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
- **Routes:** reúne informações relacionadas às rotas e caminhos utilizados pelo projeto.
- **Utils:** contém estruturas reutilizáveis, como métodos HTTP e códigos de status.
- **Docs:** contém a documentação complementar sobre o funcionamento e integração da API.

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

- Tratamento de parâmetros inválidos ou ausentes;
- Melhoria da busca de usuários por nome;
- Refatoração do fluxo de parâmetros entre aplicação, controller e service;
- Tratamento de rotas não encontradas;
- Expansão dos endpoints da API.

---

## 📄 Licença

Este projeto foi desenvolvido para fins de **estudo e aprendizado**, com foco na prática de desenvolvimento back-end utilizando Node.js e TypeScript.