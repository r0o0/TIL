# Centering Things in CSS

There's lots of ways to center things in css.

1. **Horizontally** 
  <br />
    - Inline element within a block-level parent element. [eg. links, text...]

      ```css
        .parent {
          text-align: center;
        }        
      ```
    - Block level element with a fixed width. (one block level)

      ```css
        .parent {
          margin: 0 auto;
          /** a short hand for 
          * margin-left: auto;
          * margin-right: auto;
          */
        }        
      ```
      - Several block level elements in a row
          <details>
          <summary>HTML</summary>

          ```html
            <section class="cards">
              <div class="cards_content">
                <h1>Title 1</h1>
                <p> This is the context of the content 1.</p>
              </div>
              <div class="cards_content">
                <h1>Title 2</h1>
                <p> This is the context of the content 2.</p>
              </div>
              <div class="cards_content">
                <h1>Title 3</h1>
                <p> This is the context of the content 3.</p>
              </div>
              <div class="cards_content">
                <h1>Title 4</h1>
                <p> This is the context of the content 4.</p>
              </div>
            </section>
          ```
          </details>

        - inline-block method <br />
          *A space war*
          
            ```css
              .cards_content {
                display: inline-block;
                padding: 15px;
                margin: 0 10px;
                border: 1px solid #ccc;
              }
            ```

            ![alt text][inline-block method]

            [inline-block method]: ./assets/images/spacewar.jpg "inline-block, a space war"
            above: used display: flex | below: used display: inline-block

            **cons:** write about why not to use inline-block the cons == space war <br />
            Reference: https://css-tricks.com/fighting-the-space-between-inline-block-elements/
        - float and clear
        - table method
        - can use flexbox
          ```css
            .parent {
              display: flex;
              justify-content: center;
            }
          ```
2. **Vertically**
  <br />
  - 


3. Both
  - Known width and height
  - Unknown width and height

Inline vs Block Elements