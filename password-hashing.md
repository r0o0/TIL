# Hashing For Password Protection (Crypto API)

Crypto Api is fully supported in all browsers except for IE(Internet Explorer). [Check](https://caniuse.com/#search=crypto%20api)

It is best to save the passwords with a random unique salt. [Read](https://auth0.com/blog/adding-salt-to-hashing-a-better-way-to-store-passwords/)

[Check out algorithms choices in W3C Crypto API](https://cryptosense.com/blog/choice-of-algorithms-in-the-w3c-crypto-api/)


### `crypto.subtle.digest()` method

It is an asynchronous method that returns a promise.

```JS
// function that hashes a string with a unique salt

let hashedPwd;
const salt = 'random-unique-salt'; // must be random in production
const userPwd = 'user-typed-a-password'; // the value user typed in input[type="password"]
const algo = 'SHA-256'; // hash algorithm

const hash = (pwd) => {
  const targetSalted = pwd + salt;
  // crypto.subtle.digest() takes two arguments:
  // 1. hash algorithms: SHA-1 | SHA-256 | SHA-384 | and many more
  // 2. value to be hased that is of type ArrayBuffer
  // We can get this type with the TextEncoder class (not supported in IE)
  const hash = crypto.subtle.digest(algo, new TextEncoder().encode(targetSalted));
  return hash;
};

hash(userPwd).then(hashed => {
  console.log(hashed); // returns ArrayBuffer
  // an array of numbers
})

// function to hex hash value
const encryptHash = (hash) => {
  const byte = new Uint8Array(hash); // new Uint8Array is used to reference the elements inside an ArrayBuffer
  const result = [...byte].map((b: any) => {
    const hexCode = b.toString(16); // turns numbers to hex(base 16)
    return hexCode;
  });
  return result.join('');
}

hash(userPwd).then(hashed => {
  hashedPwd = encryptHash(hashed); // returns a hexed hashed password :)
});

// store hashedPwd
```
