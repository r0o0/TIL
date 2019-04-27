# Ref and forwardRef
Ref lets you access DOM nodes directly without re-rendering its component.

## Ref
### When to Use?

- Managing focus, text selection, or media playback.
- Triggering animations.
- Integrating with third-party DOM libraries.

``` JS
import React, { useEffect } from 'react';

function Input() {
  thisInput = React.createRef();
  }
  useEffect(() => {
    // when the window loads
    // DOM element with ref 'thisInput'
    // will be in focus state
    window.addEventListener('load', () => thisInput.current.focus());
  });
  return (
    <input
      ref={thisInput}
      type="button"
      value="Click"
    />
  );
}
```

## ForwardRef
forwardRef passes a ref from a component to a child component (just like props)

``` JS
// parent
function Form() {
  thisInput = React.createRef();
  }
  useEffect(() => {
    // when the window loads
    // DOM element with ref 'thisInput'
    // will be in focus state
    window.addEventListener('load', () => thisInput.current.focus());
  });
  return (
    <form>
      <Input ref={thisInput} />
    </form>
  );
}

// child
const Input = React.forwardRef((props, ref)) => {
  <input
      ref={ref}
      type="button"
      value="Click"
    />
}
```