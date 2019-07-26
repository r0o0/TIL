# Checking For Full Words In A Stirng

Using regex expressions:

```JS
const text = 'This is a sentence with just full words';
const text2 = 'This is a sentence with just full wo';

console.log(new RegExp("\\b" + text + "\\b").test(text)); // returns true
console.log(new RegExp("\\b" + text2 + "\\b").test(text2)); // returns false

```