# App
<p align="center">
  <h4 align="center">ApiSolid</h4>
</p>

## 💻 About:

api with fastify, prisma, typescript and more.

With this api it is possible to check in gyms in addition to the admin being able to create a gym

### RFs (Functional requirements)

- [x] It must be possible to register;
- [x] It must be possible to authenticate;
- [x] It must be possible to obtain the profile of a logged in user;
- [x] It must be possible to obtain the number of check-ins performed by the logged in user;
- [x] It must be possible for the user to obtain their check-in history;
- [x] It must be possible for the user to search for nearby gyms (up to 10km);
- [x] It must be possible for the user to search for gyms by name;
- [x] It must be possible for the user to check in at a gym;
- [x] It must be possible to validate a user's check-in;
- [x] It must be possible to register a gym;

### RNs (Business Rules)

- [x] The user must not be able to register with a duplicate email;
- [x] The user cannot do 2 check-ins on the same day;
- [x] The user cannot check in if they are not close (100m) to the gym;
- [x] The check-in can only be validated up to 20 minutes after it is created;
- [x] Check-in can only be validated by administrators;
- [x] The gym can only be registered by administrators;

### RNFs (Non-Functional Requirements)

- [x] The user's password must be encrypted;
- [x] Application data must be persisted in a PostgreSQL database;
- [x] All data lists must be paginated with 20 items per page;
- [x] The user must be identified by a JWT (JSON Web Token);

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