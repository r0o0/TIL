# Javascript Basics & Comments

## Basics

*Javascript* is **case-sensitive** so in *Javascript* language, `a` is not the same as `A`. It also supports **Unicode** character set. 

**Example:**
```Javascript
var aÓeu = 12;
var AÓeu = "text";
// both of them are treated as different variables
```

Javascript instructions are called **'statements'** and each **statements** are separated by a *semicolon* `;`. A single line statement starting from a new line doesn't necessarily need a *semicolon* `;`. But a statement with more than one line must end with a *semicolon* `;`.

**Example:**
```Javascript
var b = 2; var c = 3; // two statements in one line, need to be separated by a semicolon
var a // single statement in one line, can be used without a semicolon at the end.
```

## Comments

Comments in Javascript behave like white space and are discarded during script execution. This means, writing commnents won't take up bytes in your code when the script is run. So write as many comments you'd like! It's a good practice anyway :)

```Javascript
// used for a one line comment
/* for multi-line comments
 * use this type of  comment syntax
 */
 /* but no /* double multi-line comment syntax though, */ it doesn't work */
```




