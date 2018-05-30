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
- __`!`__ NOT operator: see details below
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
When comparing strings, _Javascript_ checks the order of strings __from left to right__. The order goes on like this: <br> **_nonalphabetic characters_ < _Uppercase letters_ < _lowercase letters_**.
```Javascript
// how the order of strings works

console.log("SHORT:!" < "long");
// true
console.log("short." < "lo:::ng;;;;;;");
// false

```

__NaN__("not a number") value is the only value in _Javascript_ that __is not equal to itself__ because __NaN__ value is used to indicate a value of a mathematical calculation that make no sense (_nonsensical computation_). A result of a nonsensical computation can't be equal to another nonsensical computation result.
```Javascript
console.log(NaN == NaN)
// will return false
```

<br>

### Logical Operators 

There are __3__ logical operators in _Javascript_: __logical AND `&&`, logical OR `||`, and logical NOT `!`__. These operators are used to __check wether multiple conditions are true__. 

#### Logical AND `&&`

The result is __true only if values given on both sides are true__.
```Javascript
console.log(true && false)
// false
console.log(true && true)
// true
```

#### Logical OR `||`

The result is __true if the value of either sides is true__.
```Javascript
console.log(true || false)
// true
console.log(false || false)
// false
```

#### Logical NOT `!`
This operator __changes__ a true value to produce as false and vice versa
```Javascript
console.log(!false)
// true
console.log(!true)
// false
```
__Note:__ Logical operators can be used with Boolean values.


### Conditional (Ternary) Operator

It is the only operator with __3 values__ in _Javascript_. It is used as a short form of the `if` statement. To use a __conditional operator__: 

#### Syntax

```Javascript
// conditional operator
condition ? value1 : value2
// condition checks whether it is true or false
// if condition is true 
// conditional operator returns value1
// if condition is false 
// conditional operator returns value2

// example:
console.log(true ? 1 : 2);
// 1

console.log(false ? 1 : 2);
// 2
```

