# TypeScript Compiler Settings

*Using VS Code* (in VS Code the TypeScript language is installed by default but not the TypeScript compiler)

 When starting a new TypeScript project the first step is to set up project's settings such as the compiler options and to determine which files to include or exclude. To do this you need to create a `tsconfig.json` file. (Get help with Intellisense in VS Code `^ + Space`)

The extension of a TypeScript file is `.ts`. 

In VS Code, if there are code style issues TypeScript displays as warnings instead of issues. They are:

* Variable is declared but never used
* Property is declared but its value is never read
* Unreachable code detected
* Unused label
* Fall through case in switch
* Not all code paths return a value

If you don't want these warnings disable it in the `tsconfig.json` file by typing:

```
"typescript.reportStyleChecksAsWarnings": false
```

Check [here](https://www.typescriptlang.org/docs/handbook/compiler-options.html) for **compiler options**.

<br />

*Using the command line*

In the command line, go into a TypeScript project's working directory and type `tsc --init` to create a `tsconfig.json` file. This will generate a default TypeScript configuration file.


Check [here](https://www.typescriptlang.org/docs/handbook/compiler-options.html) for **compiler options**.