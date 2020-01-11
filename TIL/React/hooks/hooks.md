# React Hooks (new 2019 - React 16.8)

> Bye bye `class`, hello `function` :)

Hooks is like a feature pack added to React.

## useState()

```JS
import React from 'react';

class App extends Recat.Component {
  // initial state
  this.state = {
    isClicked: null,
  }

  handleClick() {
    // update state
    this.setState({ isClicked: true });
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click Me</button>;
    );
  }
}
```

```JS
import React, { useState } from 'react';

function App() {
  // initial state
  const [isClicked, setIsClicked] = useState(null);

  handleClick() {
    // update State
    setIsClicked(true);
  }

  render() {
    return (
      <button onClick={handleClick}>Click Me</button>
    );
  }
}
```

