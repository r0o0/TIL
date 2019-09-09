## `useRef`

```JS
import React, { useRef, useEffect } from 'react';

function InputEl() {
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputEl && inputEl.current) {
      inputEl.current.focus();
    }
  }, []);

  return (
    <input
      ref={inputEl}
      id="text-input"
      type="text"
    />
  )
}
```