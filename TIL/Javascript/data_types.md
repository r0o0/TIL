# Javascript Data Types

In the Computer world it's all about data. You can read, write, and create data to communicate with the computer. That's why all programming languages have its own data structures built-in.

There are __7 data types__ in _Javascript_: <br>

1. __6 data types__ below are __primitive data types__ with __primitive values__.

    - __Boolean__: can have a value of __`true` or `false`__ only
    - __null__: has one and only value of __`null`__
    - __undefined__: a variable that has no value
    - __Number__: a number
    - __String__: a string
    - __Symbol__ (new in ECMAScript2015) - will learn this later on

and

- Object 

<br>

### Primitive Values

A __primitive data__ is a data type that _is not an object and has no methods_. A __primitive value__ is a value that _can't be changed. An immutable value._ 

__Example:__
```Javascript
// primitive value example to understand that it is immutable
var hero = 'Captain America';
// whatever you do to the value of variable hero
hero.replace('America', 'Marvel');
// the value of variable hero remains intact
console.log(hero); // will return Captain America its original value


// An object is mutable here's why
var avengers = {};
avengers.heroes = [
  'Captain Marvel'
];
console.log(avengers); // will return property heroes with 1 array
// {heroes: Array(1)}
// if you play around with avengers object the original value will change
avengers.heroes.push('Captain America');
console.log(avengers); // will return property heroes with 2 arrays
// {heroes: Array(2)}
```

__Note:__ Don't confuse between __assigning a new value__ to a variable and the __primitive value__ itself. The existing value can't be changed like an array, object, or function are changed. But it can be reassigned a new value.

__Example:__
```Javascript
// an extension of the code above

// create a new value and assign a new value
var new_hero = hero.replace('America', 'Marvel');
console.log(new_hero); // will return Captain Marvel

// alter variable new_hero's value
new_hero.slice(0, 7);
// variable new_hero not changed
console.log(new_hero); // will return Captain Marvel
// note here, if you reassign a new value to variable hero
var hero = hero.replace('America', 'Marvel'); // will return Captain Marvel
// variable hero's value will be changed to the new value assigned
```
<br>

### Boolean

Boolean is basically like an on/off switch or a yes or no answer. And a Boolean type has only two values __`true`__ or __`false`__. It is often used in __if/else statements__ or in __loops__ to check if the condition meets before executing the code or the code won't run.

__Example:__
```Javascript
// to compare two conditions
var condition = false;
if (!condition) {
  condition = !condition;
  console.log('condition is ' + condition); //will return 'condition is true'
} 
```
<br>

### Number

JavaScript uses 64 bits of computer memory to store a single number value. There are various numeric types used in programming languages and _Javascript_ has one. Specifically it's called __'double-precision 64-bit binary format IEE E 754 value'.__ or *__double__* for short. Hmm.. let's study the details later :) For now, this type of number __store both integers and fractions__. That is why in _Javascript_:
```Javascript
var sum = 0.1 + 0.2;
console.log(sum); 
// will return:
// 0.30000000000000004

// if you check
console.log(sum === 0.3);
// will return:
// false
```
__Note:__ Fractional numbers are written with a dot
like __`0.3`__

__To use very big or very small numbers__ in _Javascript_, you can use scientific notation __`e`__ (_letter 'e' means '10 to the power of'_) for exponent like __`0.3e10`__ Translate __`0.3e10`__ to math is 
__`0.3 × 10^10 = 3000000000`__.

There are __three special values__ in _JavaScript_  number data type that isn't normal numbers.

- __`Infinity`__ : positive infinities (Not recommended)
- __`-Infinity`__ : negative infinities (Not recommended)
- __`NaN`__ : stands for 'not a number'

__Note:__ Don't trust too much `Infinity` and `-Infinity` as they aren't mathematically correct. You get `NaN` whenever the result of a calculation isn't meaningful. (eg. `console.log(0 / 0);`).

<br>

### String

__String__ data type is used __to represent text__. To use give a __String__ value in _Javascript_:
```Javascript
// wrap text using single quotation
'this is a text'
// or using double quotation
"this is also a text"
```

To represent multiple lines of text:
```Javascript
var multi_line = 'this is a multi\nlines of text\nas you can see.'
console.log(multi_line);
// will return:
// this is a multi
// lines of text
// as you can see
```

To __write quotation marks__ inside a String value:
```Javascript
// use backslash '\' or 
// double quotation inside a single quotation 
// and vice versa
var quote_text = 'Let\'s wrap text around "quotation marks".';
console.log(quote_text);
// will return
// Let's wrap text around "quotation marks".
```

Multiple strings can be glued together. This is called __'concatenation'__. To __concantenate__:
```Javascript
console.log('This ' + 'is ' + 'con' + 'can' + 'tenation' + '.');
// will return
// This is concantenation.
// Notice Javascript recognizes space and 
// glues texts including the space if there's any.
```
__Note:__ Strings __can't be divided, multiplied, or subtracted__ if __added__ _Javascript_ will __concantenate__.

