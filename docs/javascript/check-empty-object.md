# Check empty Object

Various methods to check for empty Object.

## JS

#### ES8 (2017)
``` JS
const data = {};
Object.entries(data).length === 0 && data.constructor === Object; // true
```
__Note:__ `Object.entries` not supported in IE browsers.

#### ES6 (2015)
``` JS
const data = {};
Object.keys(data).length === 0 && data.constructor === Object; // true
```

#### ES5 (Standard)
``` JS
var data = {};
function isObjectEmpty(data) {
  for (var prop in data) {
    if(data.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
}
isObjectEmpty(); // true
```

## jQuery

``` JS
const data = {};
jQuery.isEmptyObject(data); // true
```

## Lodash

``` JS
const data = {};
_.isEmpty(data); // true
```
