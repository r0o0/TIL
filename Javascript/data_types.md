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

