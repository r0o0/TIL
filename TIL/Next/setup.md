# Setup Next.js

## Base setup

#### Install
```
yarn add next react react-dom -D
```
#### Package.json
```
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}
```
and for the rest check __[Configure Next.js Docs](https://nextjs.org/docs#customizing-webpack-config)__

## Boilerplate

Just like `create-react-app`, there is a boilerplate for Next.js app.

#### npx & npm
```
npx create-next-app app-name
cd app-name/
npm run dev
```

#### yarn
```
yarn create next-app app-name
cd app-name/
yarn run
```

__Main file directory:__
`./pages/index.js`

Put static files such as images into `./static` folder.

## Plugins

__[Official Next.js Plugins (Zeit)](https://github.com/zeit/next-plugins)__
