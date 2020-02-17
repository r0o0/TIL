---
title: Combining Multiple HOCs
lang: en-US
prev: false
next: false
---

<Icon name="react" />

# Combining multiple HOCs

An example using Redux `connect` and Material-ui `withStyles`.

## Install

Install **recompose**:

<Terminal :commands="['yarn add recompose']" />


## How to use

```JS
import { compose } from 'recompose';

// ...some codes

export default compose(
  withStyles(styles, {
    name: 'App',
  }),
  connect(),
)(AppFrame);
```

or

```JS
export default withStyles(styles)(connect(mapStateToProps)(App));
```
