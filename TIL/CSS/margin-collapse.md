# Margin Collapse Behaviour in CSS

It sometimes occurs when two elements adjacent to each other has both a margin.

```HTML
  <div class="box1">Box 1</div>
  <div class="box2">Box 2</div>
```

## Solving with a padding
```CSS
  /* Wanted behaviour:
  ** 40px in between .box1 and .box2
  ** Margin Collapse:
  ** margin in between .box1 and .box2 will be 20px
  */
  .box1 {
    margin: 20px 0;
  }
  .box2 {
    margin: 20px 0;
  }

  /* Solve with padding */
  .box1, .box2 {
    margin: 18px 0;
    padding: 1px 0;
  }
```

## Solving with border

## Solving by floating the elements
