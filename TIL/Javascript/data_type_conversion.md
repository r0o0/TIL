# Automatic Data Type Conversion

Because *Javascript* is **dynamically** typed, when string and number data type expressions are involved Javascript behaves in a certain way. See below.

### Converts numbers to strings

#### Automatic conversion

Javascript concantenates text when `+` expression is used.
<br>

**Example:**
```Javascript
var a = 1;
var b = 'text';
var c = a + b;
console.log(c); // will return "1text"
```
#### Convert to string

You can use the `String()` object in order to convert a number value to a string value.
```Javascript
var num = 1234;
num = String(num); 
console.log(num); // will return "1234" typeof string
```
<br>

### Converts strings to numbers

#### Automatic conversion

Only when __operators  `-` `/` `*`__  are used and obviously only when the string value is a __number__.
<br>

**Example:**

```Javascript
var a = 1; // data type: number
var b = "2"; // data type: string
var c = "3"; // data type: string
var d = 4; // data type: number
var minus = c - a; // returns 2, data type: number
minus = c - b; // returns 1, data type: number
var multi = b * d; // returns 8, data type: number
multi = b * c; // returns 6, data type: number
var divide = d / b; // returns 2, data type: number
// you get the idea..
``` 

However when the __`+` operator__ is used Javascript converts the number value to a string value.

```Javascript
var a = 1;
var b = "3";
var c = b + a;
console.log(c); // will return "31"
```
<br>

#### Convert to number

When __`Number()`__ object is used:
```Javascript
var text = '12345';
text = Number(text);
console.log(text); // will return 12345 typeof number
```

When __operator `+`__ is used in front of a number string:
```Javascript
var text = '34000';
text = +text;
console.log(text); // will return 34000 typeof number
```

When you __substract__: <br>
_Javascript_ changes the string type __to a number type__ before executing the __substraction__.
```Javascript
var text = '100';
text = text - 10;
console.log(text); // will return 90 typeof number
// so when you substract 0 to variable text, it will store a number type value of 100;
```

When you __multiply__: <br>
_Javascript_ changes the string type __to a number type__ before executing the __multiplication__.
```Javascript
var text = '10';
text = text * 1;
console.log(text); // will return 10 typeof number
text = text * 2;
console.log(text); // will return 20 typeof number
```

When you __divide__:
_Javascript_ changes the string type __to a number type__ before executing the __division__.
```Javascript
var text = '1000';
text = text = 1;
console.log(text); // will return 1000 typeof number
text = text / 10;
console.log(text); // will return 100 typeof number
```
When __`parseInt()`__ function is used: <br>
only returns __whole numbers__
```Javascript
var text = '3456.200';
text = parseInt(text);
console.log(text); // will return 3456 typeof number
```

When __`parseFloat()`__ function is used: <br>
returns a number value including __decimals__ if there's any
```Javascript
var text = '3453';
var text2 = '200.345';
text = parseFloat(text);
text2 = parseFloat(text2);
console.log(text); // will return 3453 typeof number
console.log(text2); // will return 200.345 typeof number
```
<br>

### Converts to boolean

As you can see below, _Javascript_ automatically converts __`0`, `-0`, `''`, `NaN`, `null` and `undefined`__ to a __Boolean__ value as __`false`__. <br>
You can convert to a Boolean by using the __`Boolean()`__ object or __`!!`__.
```Javascript
0 == false; // true
Boolean(0); // false
Boolean(-0); // false
Boolean(-1); // true
Boolean(1); // true
Boolean(NaN); // false
Boolean(null); // false
Boolean(undefined); // false
Boolean(''); // false
Boolean(' '); // true
!!0; // false
!!-0; // false
!!''; // false
!!NaN; // false
!!null; // false
!!undefined; // false
```
When a __function, array, and object__ are converted to a Boolean, these return a __Boolean__ value as __`true`__.

### Null and Undefined
Now let's see how _Javascript_ deals with __`null` and `undefined`__. 

When you __multiply `null`__ to a number type value: <br>
_Javascript_ will always return a number value of __`0`__
```Javascript
null * 890; // returns 0 typeof number
```
When __comparing values of `null` and `undefined`__: <br>
_Javascript_ will return a boolean value of __`true`__.
```Javascript
console.log(null == undefined); // returns true typeof boolean
```
You can also __add a number value__ with __`null`__:
```Javascript
890 + null; // returns 890 typeof number
```
