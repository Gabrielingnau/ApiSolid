# App
<p align="center">
  <h4 align="center">ApiSolid</h4>
</p>

## 💻 About:

api with fastify, prisma, typescript and more.

With this api it is possible to check in gyms in addition to the admin being able to create a gym

### RFs (Requisitos funcionais)

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;
- [x] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [x] Deve ser possível o usuário obter o seu histórico de check-ins;
- [x] Deve ser possível o usuário buscar academias próximas (até 10km);
- [x] Deve ser possível o usuário buscar academias pelo nome;
- [x] Deve ser possível o usuário realizar check-in em uma academia;
- [x] Deve ser possível validar o check-in de um usuário;
- [x] Deve ser possível cadastrar uma academia;

### RNs (Regras de negócio)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [x] O usuário não pode fazer 2 check-ins no mesmo dia;
- [x] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [x] O check-in só pode ser validado até 20 minutos após ser criado;
- [x] O check-in só pode ser validado por administradores;
- [x] A academia só pode ser cadastrada por administradores;

### RNFs (Requisitos não-funcionais)

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [x] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [x] O usuário deve ser identificado por um JWT (JSON Web Token);

---

## Technologies used

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Fastify](https://fastify.dev/)
- [Postgresql](https://www.postgresql.org/)
- [Prisma](https://www.prisma.io/)
- [Docker](https://www.docker.com/)
- [Vitest](https://vitest.dev/)
- [zod](https://zod.dev/)

---

## 🚀 How to run the project.

### Prerequisites

Before you begin, you will need to have the following tools installed on your machine:
[Node.js](https://nodejs.org/en/), [Docker](https://www.docker.com/). 
Also, it's good to have an editor to work with the code, such as [VSCode](https://code.visualstudio.com/).



### 🚧 Running the BackEnd (server)

```bash
git init

git clone https://github.com/Gabrielingnau/ApiSolid

  NODE_ENV=dev
  JWT_SECRET=
  DATABASE_URL= ("It will be generated automatically when you run the Docker command: (docker compose up -d)")

# Install the necessary dependencies
$ npm install

# Now start the BackEnd server
$ npm run start:dev

# The server will start at port:3333 - go to <http://localhost:3333>
```

---
⌨️ with ❤️ by [Gabriel Lingnau](https://www.linkedin.com/in/gabriel-lingnau-3bb17b266/) 😊
=======