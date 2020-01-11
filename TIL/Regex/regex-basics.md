# Regular Expression (Regex)

Regular Expression also called 'Regex' is used to work with strings to check for patterns in strings.

__Intro:__
- [Create Regex in JS](##Create-Regex-in-Javascript)

__Regex methods:__
- [`test()` method](##`test()`-method)

## Create Regex in Javascript

Two ways to create a Regex in Javascript:
 - `new Regex` constructor:<br>
    Use the construcor version when your regex is dynamic.

    Example:
    ```JS
    const message = 'Hello, world!';
    const pattern = 'Hello';
    const regex = new RegExp(pattern); // dynamic
    const RegexTester = (value) => regex.test(value);
    console.log(RegexTester(message)); // returns true
    ```
 - `/` Regular expression literal:<br>
    Used the literal version when your regex is constant (unchanging).
    ```JS
    const message = 'Hello, world!';
    const regex = /Hello/; // constant
    const RegexTester = (value) => regex.test(value);
    console.log(RegexTester(message)); // returns true
    ```

## `test()` method

The most basic method check a regex pattern in a string. It's a Regex method `RegExp.prototype.test()` that returns a boolean value.
```JS
const message = 'Hello, world!';
const message2 = 'world!';
const regex = /Hello/;

const RegexTester = (value) => regex.test(value);

// string contains regex pattern
console.log(RegexTester(message)); // returns true

// regex pattern not found in string
console.log(RegexTester(message)); // returns false
```
