# Javascript Operators

### Arithmetic Operators

Remeber __addition, substraction, multiplication, division__ you studied in math class? Turns out, _Javascript_ __arithmetic operators__ works exactly the same way!

```Javascript
 // addition & substraction
 console.log(20 + (4 - 10)); 
 // will return 14
 
 // multiplication & division
 console.log(10 * 2 / 2);
 // will return 10
```

__Modulo:__ The __`%`__ operator is used to get __the remainder of a division__. This operation is called __modulo__ in many programming languages. __`X % Y`__ returns the remainder of __`X / Y`__.
```Javascript
// to get the remainder of 3 / 2
console.log(3 % 2);
// will return 1 

// to get  the remainder of 2 / 1
console.log(2 % 1);
// will return 0 
```

<br>

### Unary Operators

Not all _Javascript_ operators use symbols.
- __`typeof`__ operator: check the data type of a value
```Javascript
console.log(typeof 0.3);
// will return number
console.log(typeof 'text');
// will return string
```
__Note:__ Operators that use __two values__ are called __binary operators__. If there's only __one__ it's called __unary operator__. The __`-` minus__ can be used as both __unary and binary__ operator. `console.log( -( 10 - 5 ) );`

<br>

### Comparison

To compare conditions, use __`<` 'is less than', `>` 'is greater than', `<=` 'less than or equal to', `>=` 'greater than or equal to', `==` 'equal to', `!=` 'not equal to'__.
```Javascript
// compare numbers
console.log(5 >= 5);
// will return true
// compare strings
console.log('apple' < 'banana');
// will return true
```