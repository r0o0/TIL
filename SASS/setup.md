# Sass

Sass stands for **S**yntactically **A**wesome **S**tylesheet**s**. It's just awesome! It gives you freedom and control over your css code making css coding more fun. Plus, it's more readable and you'll write __less code and do more__.

## SCSS vs SASS

File extensions ending with style.scss and style.sass are both sass. SCSS is known as __"Sassy CSS"__ the new syntax and the other an older syntax.

__SCSS syntax__

Looks very similar to css

```scss
body {
  width: 100vw;
  overflow-x: hidden;
  
  header {
    width: 100%;
    height: 56px;
  }
}
```
__Note:___ SASS syntax is basically the same as scss but with just indentations
```
// this is sass
body
  width: 100vw
  overflow-x: hidden

  header
    width: 100%
    height: 56px
```

## Setup

__Install Sass compiler__ by running __`yarn node-sass`__ in the command line. To use __sass syntax highlight__ in Visual Studio Code (currently my favorite). Install by putting this code in the command line in __VSCode__ __`ext install sass-indented`__.

Create __style.scss__ or __style.sass__ file and write css the sass way!