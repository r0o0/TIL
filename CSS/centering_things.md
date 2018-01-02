# Centering Things in CSS

There's lots of ways to center things in css.

1. **Horizontally** 
  <br />
    - Inline element within a block-level parent element. [eg. links, text...]

      ```css
        text-align: center;
      ```
    - Block level element with a fixed width. (one block level)

      ```css
        margin: 0 auto;
        /** a short hand for 
        * margin-left: auto;
        * margin-right: auto;
        */
      ```
      - Several block level elements in a row
        - inline-block method <br />
          **the bad:**
            ```css
              display: inline-block;
            ```
        - float and clear
        - table method
        - can use flexbox
          ```css
            display: flex;
            justify-content: center;
          ```
2. **Vertically**
  <br />
  - 


3. Both
  - Known width and height
  - Unknown width and height

Inline vs Block Elements