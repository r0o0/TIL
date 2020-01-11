# What is `NODE_ENV`?

__NODE_ENV__ is an environment variable with a default value of __'development'__ specifies the environment in which an application is running like 'development', 'production', 'testing'... wether the application is built in React, Node.js etc.

### Try:

```JS
// default NODE_ENV value
console.log(process.env.NODE_ENV);
// will print
// development
```

### To change value

```JS
// change NODE_ENV value
process.env.NODE_ENV = 'production';
console.log(process.env.NODE_ENV);
// will print
// production
```

## When to use?
Set `NODE_ENV='production'` in package.json or other methods for production.

### And why?

In __'development'__ mode:
- No views are cached
- error messages are generated in more detail
- Front-end codes like Javascript, css, etc. aren’t minimized and cached

In __'production'__ mode (any frameworks):

- Middlewares and other dependencies switch to use efficient code path
- Only packages in dependencies are installed. Dependencies in devDependencies and peerDependencies are ignored -> reduces size of your app.

## USAGE

```JSON
{
  "name": "node_envExample",
  "version": "1.0.0",
  "description": "An example to show how to use NODE_ENV",
  "scripts": {
    // for local server, by default is set to NODE_ENV='development'
    "start": "ts-node-dev --respawn --transpileOnly -r dotenv/config src/index.ts",
    // just need to set NODE_ENV to production before deploying your app
    "build": "NODE_ENV=production deploy to somewhere",
  },
}
```