# React Component

A __component__ is a chunk of reusable code just like a `function` in _Javascript_ but with the role of often rendering HTML. And __React__ application is made of these components put together.

## Syntax

To create a component you need the following

### Import React

You have to import react into the _Javascript_ file you're working on with the following code:
__`import React from 'react';`__. The imported __React__ is an object and it has its own properties and methods.

### Create class Component

A __'class component'__ in React comes from a __Component__ object in react library. React class component is a **_Javascript_ class**.

```JS
// import 'react' with a variable named React
import React from 'react';

// create a sub class from super class React.Component
class NewComponent extends React.Component {
  // inside
  // always have a render function/method
  render() {
    // and a return
    return <h1>This is a React Component</h1>
  }
}
```

__Note:__ In a React component there must be a __`render()`__ method and the render function __must return__.

### Import ReactDOM & Create a Component Instance

__`ReactDOM`__ is react's way of manipulating the DOM. Because the methods in object __`React`__ do nothing with the DOM, you need to __import `'react-dom'`__ for DOM interactions. In order to make use of class components, you need to create a __component instance__ using the name of the class component as a __JSX element's self-closing tag__.

```JS
import React from 'react';
import ReactDOM from 'react-dom';

class NewComponent extends React.Component {
  render() {
    return <h1>This is a Recat Component</h1>
  }
}

// appear on screen:
ReactDOM.render(
  // component instance to render
  <NewComponent />,
  // in the location of:
  document.querySelector(.app);
);
```