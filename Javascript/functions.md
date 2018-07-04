# Functions

What's a __function__? A __function__ is a block of code that executes when its __name__ is called.

## Syntax

`function` keyword is used

```Javascript
  // can put as many parameters you want
  function (param, param...) {
    // code
  }
```

### Different Types of Functions

#### An anonymous function

This function has no name associated with itself. So __you won't be able to call__ an __anonymous function__. It's typically used as a __callback__ and mostly used as an __IIFE__(**I**mmediately **I**nvoked **F**unction **E**xperssions) and pronounced as _**"iffy"**_. <br>

```Javascript
  function () {
    // code
  } // no need to end with a semi-colon
```

__Note:__ The __`return`__ statement __ends function execution__ and __specify a value__ to be returned when the function is called.

#### A function declaration

It's a function with a name. It has several calling names to it: a __function definition__, a __function statement__.

```Javascript
  function functionName(type) {
    return 'This is a ' + type + ' function';
  }

  // call the function named "functionName"
  functionName('declared');
  // the code block inside of functionName function
  // runs and will return
  // "This is a declared function"
```

#### A function expressions

__Both anonymous function and function declaration__ can be stored __in a variable__. When you store an __anonymous function__ in a variable you actually __make a referene__ of the function so the function itself is still __anonymous__.

```Javascript
  // reference an anonymous function
  var addition = function(number) {
    return number + number;
  }
  // to call an anonymous function
  addition(3);
  // will return
  // 6


  // reference a declared function
  var addition2 = function name(number) {
    return number + number;
  }
  addition2(3);
  // will return
  // 6
```

__Note:__ If you call function name() the console will return an error: __'Uncaught TypeError: name is not a function'__. __When using a function expression__ don't refer anonymous function instead __refer a function declaration__.

### IIFE

```Javascript
  // an IIFE
  (function () {
    alert('This is an IIFE');
  })();
  // will return
  // 60
  // immediately as soon as the code above
  // is called the code block inside iife
  // will be executed
```