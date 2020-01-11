# Customize Texfield

[Sample](https://codesandbox.io/s/mu-customtextfield-3mcly?fontsize=14)

[TextField API Document](https://material-ui.com/api/text-field/)
```JS
import TextField from '@material-ui/core/TextField';
// ,,,

<TextField
  label="Customized"
  variant="outlined"
  id="outlined-input"
  // override styles via props passed to InputLabel component
  InputLabelProps={{
    classes: {
      root: classes.labelRoot,
      focused: classes.labelFocused
    }
  }}
  // override styles via props passed to OutlinedInput component
  InputProps={{
    classes: {
      root: classes.inputRoot,
      notchedOutline: classes.notchedOutline,
      focused: classes.focused
    }
  }}
/>
```

### textfieldStyles.js
```JS
import { makeStyles } from "@material-ui/core/styles";

export const styles = makeStyles(() => ({
  // label
  // give space to label when label on focus
  // changes in font size or font weight
  labelRoot: {
    paddingLeft: "6px",
    paddingRight: "6px",
    background: "#fff"
  },
  labelFocused: {
    fontWeight: "bold",
    color: "#d80913 !important"
  },

  // input
  inputRoot: {
    margin: 0,
    minWidth: "600px"
  },
  // reset notchedOutline style
  notchedOutline: {},
  // set notchedOutline style on focus
  focused: {
    "& $notchedOutline": {
      borderColor: "#d80913 !important"
    }
  }
}));
```