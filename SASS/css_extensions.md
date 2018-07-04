# CSS Extensions

In Sass you can do more than you did with CSS.

## Nesting

You can nest children elements into its parent element. 

__The way of CSS__

```css
nav ul {
  width: 100%;
  font-size: 14px;
}
nav li {
  width: 100%;
  height: 40px;
  background-color: #ccc;
}
```

__The Sass way__

```scss
nav {
  ul {
    width: 100%;
    font-size: 14px;
    li {
      width: 100%;
      height: 40px;
      background-color: #ccc;
    }
  }
}
```

## `&` in Sass

The __`&` ampersand__ in Sass is used to refer the element's parent.

```scss
a {
  color: blue;
  &:hover {
    color: red;
  }
  $:visited {
    color: purple;
  }
}
```
__Note:__ Useful when used with __pseudo selectors__

## Nesting Properties

In Sass properties can be nested!

```scss
.title {
  font: {
    family: sans-serif;
    size: 18px;
    weight: bold;
  }
}
```

__The above code when turned into css:__

```css
.title {
  font-family: sans-serif;
  font-size: 18px;
  font-weight: bold;
}
```
