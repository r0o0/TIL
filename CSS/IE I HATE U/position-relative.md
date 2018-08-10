# Position Relative Issue in IE & Edge

When __position relative__ is used in any element in your styles, __IE__ and __Edge__ browsers create an empty __white space__.

## Issue

>![white space in IE](../assets/images/ie-white-space-posrel.jpg)

A bit chunk of white space below the footer!!

## Solution

```css
  tag, #id, .class {
    /* where there is a position relative */
    position: relative;

    /*
    ** this does the trick
    ** to remove the white space
    */
    overflow: hidden;
  }
```
Hooray to __overflow hidden__!!



