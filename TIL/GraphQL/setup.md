# Setting Up GraphQl

The easiest way to get __GraphQL__ up and running is to install __[graphql-yoga](https://github.com/prismagraphql/graphql-yoga)__.

__Using npm:__\
__`npm install graphql-yoga`__

__Using yarn:__\
__`yarn add graphql-yoga`__

## Install dev-dependencies

### Nodemon

I'm no fan of installing 
__Using npm:__\
__`npm install nodemon --save-dev`__

__Using yarn:__\
__`yarn add nodmon --dev`__


__Project folder tree__
```
 node-modules/
 src/
  index.js
 package.json
```
To use nodemon add this in __`package.json`__
```json
  "scripts": {
    "start": "nodemon src/index.js"
  }
```

### Use ES6 syntax in Node.js

__Using npm:__\
__`npm install babel-cli babel-preset-env --save-dev`__

__Using yarn:__\
__`yarn add babel-cli babel-preset-env --dev`__

Add a __`.babelrc`__ and modify the __'scripts'__ section in __`package.json`__
```json
  "scripts": {
    "start": "nodemon --exec babel-node src/index.js"
  }
```

## Getting the server up and running

Time to see if all works out fine.

__Node.js without ES6 syntax__
```JS
  // src/index.js
  const { GraphQLServer } = require('graphql-yoga');

  const typeDefs = `
    type Query { 
      test: String! 
    }
  `;

  const resolvers = {
    Query: {
      test: () => 'Hello GraphQL'
    }
  };

  const server = new GraphQLServer({
    typeDefs,
    resolvers
  });

  server.start(() => console.log('GraphQL Server is Running :>'));
```

__Node.js using ES6 syntax__
```JS
  // src/index.js
  import { GraphQLServer } from 'graphql-yoga';

  const typeDefs = `
    type Query {
      test: String!
    }
  `;

  const resolvers = {
    Query: {
      test: () => 'Hello GraphQl'
    }
  };

  const server = new GraphQLServer({
    typeDefs,
    resolvers
  });

  server.start(() => console.log('GraphQL Server is Running :>'));
```