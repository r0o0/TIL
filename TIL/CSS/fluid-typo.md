# Fluid Typography

Precise font-size control for fluid typography.
From [Mike Riethmuller-Fluid-type-calc](https://www.madebymike.com.au/writing/fluid-type-calc-examples/)
 
## The Formula

```
  min_fontSize(px) + (max_fontSize - min_fontSize) * ( (100vw - min_width(px)) / (max_width - min_width) );
```

## Make Use

__Base font size__: 20px <br>
__Maximum font size__: 28px <br>
__Screen size for base font size__: 720px <br>
__Screen size for max font size__: 1024px <br>

```css
  @media screen and (min-width: 720px) {
    .fluid-type {
      font-size: calc(20px + 8px * ((100vw - 720px) / 304));
    }
  }
```
Font size will scale fluidly from screen width 720px starting at font-size of 20px and grow till it's 28px until screen width 1024px.