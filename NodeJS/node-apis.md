# Node.js API

Check which node version you are using for your project.
- To check node version run this command in your terminal: `node -v`

And use the provided apis from node.js.
Node.js itself provides lots of interfaces for development–interfaces are features that node.js provides. Find useful ones in link below.

[Node.js API Docs](https://nodejs.org/en/docs/)

## `require`
In order to use node.js interfaces you need to `require` them just like `import` in Javascript.

Let's say you want to use HTTP interface.
__Example:__
```JS
const http = require('http');

// ... use methods inside HTTP interface
```

## Synchronous vs Asynchronous methods

Any methods that has a 'Sync' attached behind indicates that it runs synchronously.

__Example:__
```JS
fs.copyFile() // asynchronous
fs.copyFileSync() // synchronous version of fs.copyFile()
```