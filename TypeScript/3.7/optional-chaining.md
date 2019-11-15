# Optional Chaining (TS 3.7)

Use __`?.`__ when you want to stop running some expressions if `null` or `undefined` is encountered. This is called optional property accesses

## optional property access
The below code is saying to:
Don't execute `run()` if a is either `null` ol `undefined`.
```
let a = number | undefined;
const x = a?.run();
```

The above code is equivalent to:
```
let a = number | undefined;
const x = (a === null || a === undefined) ? undefined : a.run();
```

## optional call
```js
const formatResult = (setTime?: (time: string) => void) => {setTime?.('2019-11-15');
```
```js
const formatResult = (setTime?: (time: string) => void) => {
  if (res !== null) {
    return setTime('2019-11-15');
  }
};
```

