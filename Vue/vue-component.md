# Vue Component

There are many ways to define a Vue component. The version that I like is called the __Single File Component__. It consists of three parts: template, script and style. And the file must end with __'.vue'__ – it's a vue file. _To use .vue files you need a webpack setup._

Another pro for using a Single File Component is that it supports preprocessors. Here's a list of supported ones:

- TypeScript
- SCSS
- Sass
- Less
- PostCSS
- Pug:

## Single File Component

File name must end with __'.vue'.__


app.vue

```HTML
<!-- Html -->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<!-- Javascript -->
<script>
// import component
import HelloWorld from './components/HelloWorld.vue'

export default {
  // component name
  // best practice: use PascalCase
  name: 'App',
  // call component you want to use
  components: {
    HelloWorld
  }
}
</script>

<!-- Css -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

## Template

 Template is a syntax that vue uses to render html. To use just wrap your markup with `<template>` tag. This tag is also used as a grouping tag just like `<React.Fragment>` tag does in React.

### Variables inside `<template>`

When putting a variable inside a string in programming, it is called 'string interpolation'. There are several interpolations as such in Vue.

#### Text

Put variable inside double curly brackets also called __'Moustache'__.

```HTML
<template>
  <p>{{ content }}</p>
</template>

<script>
export default {
  name: 'Content',
  data:  {
    content: 'Vue will up date content when content data changes'
  }
}
</script>
```
__Note:__ Vue will only update data that is initially set at the time component is rendered.

#### Javascript Expressions
```HTML
<template>
  <p>{{ isValid ? msg : '' }}</p>
</template>

<script>
export default {
  name: 'NameTag',
  data:  {
    isValid: true,
    msg: 'Valid name'
  }
}
</script>
```
__Note:__ Basically use 'Moustache' in Vue as you used `{}` curly braces in JSX in React.

#### Variables inside attributes -> Directives
No more 'Moustaches' inside attributes! This looks really weird as it allows variable inside double quotes. But it's just Vue's way of doing it... called __'directives'__. It's  a special attribute starting with __`v-`__ and takes in a _single Javascript expression_.

Here are some of Vue directives: `v-if`, `v-else`, `v-bind` etc.

```HTML
<template>
  <p v-if="isValid">Move to next step.</p>
</template>

<script>
export default {
  name: 'Message',
  data:  {
    isValid: true
  }
}
</script
```
<br>
Some directives can take arguments separated with a semi-colon __`:`__

```HTML
<template>
  <a v-bind:href="url">More about Vue</a>
</template>

<script>
export default {
  name: 'FakeLink',
  data:  {
    url: 'https://vuejs.org/v2/guide/syntax.html'
  }
}
</script>
```
