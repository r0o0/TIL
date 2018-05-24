# Static vs Dynamic typing

*Javascript* is a **dynamically** typed language. What's dynamically typed? It's when types are *checked on the fly*, when the computer is executing the code. That's why variables in *Javascript* are not directly related to any value type. Meaning, you can assign any values of any types to any variables without specifying the data type. *Freedom~!*
<br><br>


### Dynamic

Let's say there's a variable called `a`. You gave `a` a number value `0` to store. The data type of variable `a` would be a *number data type*. Later, you stored a letter value of `1` to variable `a`. *Javascript* will change the data type of variable `a` to a string data type.

**Example:**

```Javascript
  var a = 0; // typeof a is number
  a = "1";
  console.log(typeof a); // will return string
```
<br>

### Static

Unlike *Javascript*, *Typescript* is a **statically** typed language. You need to set specific data types to variables. And because **statically** typed language checks the types before the computer executes the code, you're not allowed to change its data type. Let's see what would happen to a statically typed language if we go over the scenario above. 

**Example:**

```Typescript
var a:number = 0; // typeof a is number
a = "1"; // typescript reads this as an error because variable a cannot contain a string type data value
```
One of the advantages of using a **statically** typed language is: it will catch type mismatch at an early stage which would be helpful with debugging. 

<br>

_More:_<br>
In *Javascript*, there are a few things to consider when using expressions involving number and string data type values. See data type conversion.




