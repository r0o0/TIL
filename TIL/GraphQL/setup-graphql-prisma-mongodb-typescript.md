# Setup GraphQL Server Using: `graphql-yoga prisma mongodb typescript`

install mongodb check mongodb md

install prisma -g

to be able to use these commands prisma init prisma deploy etc...

install docker to start mongodb server and connect to prisma server

yarn add graphql-yoga prisma-client-lib
yarn add typescript ts-node-dev ts-node -D

prisma.yml
hooks: You can set up various hooks here, but what I want here is to run prisma generate every time we deploy to Prisma.


```json
"scripts": {
  "start": "ts-node-dev --respawn --transpileOnly src/index.ts",
  "deploy": "prisma deploy",
}
```

variable substitution
https://docs.docker.com/compose/environment-variables/
https://docs.docker.com/compose/compose-file/#variable-substitution