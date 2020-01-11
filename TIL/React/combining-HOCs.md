# Combining multiple HOCs

An example using Redux `connect` and Material-ui `withStyles`.

__Example:__

Install '__recompose__': `yarn add recompose`

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
