# JavaScript `filter()`, `find()`, `forEach()`, `map()`, `reduce()`
Javascript array methods filter, find, forEach, map, reduce.

## `filter()`
It's a javascript array method which creates a new array with all elements that pass a certain requirement or test.

```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```

### When to use filter?
Use when you want to select multiple elements that meets certain requirements from an array.

## `find()`
It's a javascript array method which returns the value of the first element in the array that meets the requirement or test.

```js
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12
```

### When to use find?
Use when you want to select a single element from an array.


## `forEach()`
It's a javascript array method which executes once for each elements in an array. Works the same way as a for loop.

Both codes below ends up with the same result.
```js
// for loop
var array = [1,2,3];
for (var i = 0; i < array.length; i++){
  console.log(i);
}
```

```js
// forEach method
var array = [1,2,3];
array.forEach(function(i){
  console.log(i);
});
```

### Why use forEach?
1. Ease of use and readability
2. Pass individual function with it's own scope ([scoping of code](https://stackoverflow.com/questions/500431/what-is-the-scope-of-variables-in-javascript))

### When to use forEach?
Use when you can't use other specific array methods in your code.

## `map()`
It's a javascript array method which creates a new array with the result of each callback on every element in the array.

```js
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

```

#### Parameters
```js
array.map((elem, index, array) => {
  //...
}, thisArg); // (Optional) object that will be referred to as this in callback
```

### When to use map?
Use when you want to transform elements in an array.

## `reduce()`
It's a javascript array method which executes a reducer function on each element of the array and returns a single value.

```js
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
```

### When to use reduce?
Use when you want to get a single value from multiple elements in an array.


## References
[Why and when to use forEach, map, filter, reduce, and find in JavaScript.](https://medium.com/@JeffLombardJr/understanding-foreach-map-filter-and-find-in-javascript-f91da93b9f2c)