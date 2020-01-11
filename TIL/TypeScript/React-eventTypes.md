## Input Events

### `onChange`
```JS
import React, { useState } from 'react';

function InputTitle() {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <label
      htmlFor="title"
    >
      <input
        id="title"
        name="title"
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
    </label>
  );
}


```