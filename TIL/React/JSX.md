# JSX

__JSX__ is a _Javascript's_ syntax extension. It was created to be used with __React__. And looks very __similar to HTML__.

## Syntax

JSX can be __stored in a variable, a function, an object, an array__... anywhere a __Javascript expressions__ can be stored in.

### Single line JSX

```JS
const paragraph = <h1>Hello World</h1>;
```

### Multi line JSX

A multi line JSX must be __wrapped in parenthesis__ __`(` `)`__. Also called __Nested JSX__.

```JS
function list() {(
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
  </ul>
)};
```

__Note:__ A multi line JSX must have a parent wrapper.

```JS
// This code will not work
const content = (
  <p>This is a string.</p>
  <p>This is another in a new line.</p>
);
```

## Rendering JSX

To render JSX into the browser (make it appear). A _Javascript_ library called __`ReactDOM`__ is used. ReactDOM is React's way of handling __DOM__.

### ReactDOM `render()`

`render()` is one of ReactDOM's method. It takes __2 arguments__. The first one a JSX, the second is the __location__ where the JSX will appear (acts like __`innerHTML`__). 

```JS
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>Hello World</h1>, document.querySelector('.app'));
```

__Important:__ The __`render()`__ method __only updates DOM elements that have been changed__.

```JS
const hello = <h1>Hello world</h1>;

// This will add "Hello world" to the screen:
ReactDOM.render(hello, document.getElementById('app'));

// This won't do anything because the JSX stored in hello hasn't changed.
ReactDOM.render(hello, document.getElementById('app'));
```

__Note:__ This is possible because React has a __Virtual DOM__

## class in JSX : `className`

The __`class`__ attribute in __HTML__ can't be used in JSX. Instead, __`className`__ is used. After JSX is compiled it will autmatically render `className` as `class`.

```JS
const article = (
  <article>
    <h1 className="title">Title</h1>
  </article>
);
```

## Self-closing tag in JSX

In __HTML__, it is optional to include __the slash `/`__ but __in JSX it's a must__.

```JS
// in JSX self closing tags must have a slash
// or it will complain with an error.

const paragraph = (
  <div class="content">
    <p>
      This a text. <br />
      THis is a new line.
    </p>
  </div>
);
```

## Javascript inside JSX

In order to write _Javascript_ inside of JSX, write Javascript code inside __curly braces `{` `}`__

```JS
const text = 'HTML inside Javascript';

function header() {
  return (
    <header>
      <h1>{text}</h1>
      <p>JSX is interesting!</p>
    </header>
  );
}

ReactDOM.render(header(), document.getElementById('app'));
// will appear on screen:
//  HTML inside Javascript
//  JSX is interesting!
```

## Event Listeners in JSX

Just like in HTML, JSX can pass on __event listeners__ using __special attributes__. Here is a list of the atttributes: [__Check the list here__](https://reactjs.org/docs/events.html#supported-events)

## Conditional JSX

You __can't use an if/else statement__ inside of __JSX__. There are a few other ways to give a condition.

### If/else statement outside of JSX

If inside doesn't work just use it on the outside.

```JS
function check(condition) {
  return condition ? 'true' : 'false';
}

let result;

if (check(true) === 'true') {
  result = <p>condition is true</p>;
} else {
  result = <p>condition is false</p>;
}

// when rendered
// will appear on screen:
//  condition is true
```

### Using the Ternary Operator

This one is the more compact version of if/else statement in React and it is used more often as well.

```JS
function check(condition) {
  return condition ? 'true' : 'false';
}

const result = (
  <p>
    {check(true) === 'true' ? 'condition is true' : 'condition is false'}
  </p>
);

// the above code
// becomes more compact
```

## `&&` in JSX

The __`&&`__ operator is also often used in React to give a condition.

```JS
const user_status = 'active';

const status = (
  <p>This user is 
    {user_status && <span> {user_status}</span>}
  </p>
);

// when rendered
// will appear on screen
//  This user is active.
```

## `key` in JSX

__`key`__ is a JSX attribute __used in a list item__. When compiled it __becomes invisible__.

__`key`__ is needed if either of the following are __true__:

- The list-items must __remember something__ on each render.
- A list __has a specific order__ to keep on each render.

__Note:__ If you're not sure then it never hurts to use them!

## React without JSX

When a JSX element is compiled the compiler transforms the element into a React __`createElement()`__ method.

### Syntax

```JS
const h1 = <h1>Hello world</h1>;

// the above code is exactly the same as below
const h1 = React.createElement('h1', null, 'Hello, world');
```
