# Javascript Declarations

### Variable declaration, and constant declaration

*Javascript* **declaration** creates a **variable**(able to be changed or adapted) storage location and reserves a portion of computer memory (in computer programming, this is called *memory allocation*) of the declared variable. In which you can either immediately or later **define** a value with an `=` operator.

There are **3** kinds of **declarations** in *Javascript*:
1. `var` declares a __variable__, you can initialize to a value (optional).
2. `let` declares a __block-scoped__, __local variable__, you can initialize to a value (optional).
3. `const` declares a **block-scoped**, read-only named **constant**(fixed value that can't be changed).

**Example:** <br>
You can declare a variable in 3 ways:
```Javascript
var a; //using the keyword var, used to declare both global & local variables
b = 1; // if declared outside of a function, Javascript treats it as a global variable but this is not a recommended method might as well not use it
let c = 1; // using the keyword let declares a block-scoped local variable (you'll learn this later :D)
```
<br>

__Note:__ 
When you only declare a **variable with no definition**, meaning you didn't assign any value to the declared variable. _Javascript_ will automatically assign (initialize) the value of `undefined`.

<br>

### Naming
You can give a name to a _Javascript_ variable called __identifier__ within certain rules.
1. An __identifier__ must __start__ with either:
    - a letter either lowercase`a–z` or uppercase`A-Z`
    - underscore `_`
    - dollar sign `$`

2. The following (subsequent) characters can be
    - all of the above and
    - numbers `0–9`

**Example:**
```Javascript
var $test;
var _storage = 0;
let $Test;
const _store12 = 'i cannot be changed';
```

3. _Javascript_ reserved keywords for use; the list is a bit long but to name a few:
    - break
    - case
    - class
    - debugger
    - default
    - and etc.
Too long to memorize all these!! <br>

If you used one of these reserved _Javasript_ keywords by any chance the console will let you know. A red line with a big __x__ will appear saying: __'Uncaught SyntaxError: Unexpected token [keyword].'__ So no worries :)
