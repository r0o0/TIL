# Mixins

## Basics
Mixins can be used for repetitive style codes and can help get rid of unnecessary classes in the markup.

#### Scss
``` scss
// create mixin
@mixin clearfix {
  &:after
  content
  display: table;
  clear: both;
}
// use mixin
.wrapper {
  @include clearfix
}
```

#### Sass
``` scss
// create mixin
=clearfix
  &:after
  content
  display: table;
  clear: both;

// use mixin
.wrapper
  +clearfix
```
__Note:__ _'clearfix-hack'_ and _'clearfix_hack'_ mixin names is treated as the same mixin.

## Mixins can become Powerful

Mixins can take arguments just like a function.

#### Scss
``` scss
// create
@mixin transform($property) {
  transform: $property;
}

// use
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  @include transform(translate(-50%, -50%));
}
```

#### Sass
```scss
// create
=transform($property)
  transform: $property

// use
.center
  position: absolute
  top: 50%
  left: 50%
  +transform(translate(-50%, -50%))
```




