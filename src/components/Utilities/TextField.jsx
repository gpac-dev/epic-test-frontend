import React from 'react'
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";

const CssTextField = withStyles({
  root: {
    margin: "10px 0",
    width: "100%",
    "& label.Mui-focused": {
      color: "#1A1C21",
      backgroundColor: "#eceef2",
      padding: "0 15px 0 3px",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#1A1C21"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: "30px"
      },
      "&:hover fieldset": {
        borderColor: "#1A1C21",
        borderWidth: "1px"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#1A1C21",
        borderWidth: "1px"
      }
    }
  }
})(TextField);


class InputFill extends React.Component {
  render() {
    const classes = withStyles();
    return (
      <div className={classes.root}>
        <CssTextField
        required={this.props.required}
        helperText={this.props.helper}
          className={classes.margin}
          label={this.props.LabelTag}
          variant="outlined"
          id="custom-css-outlined-input"
        />
      </div>
    );
  }

}


export default InputFill;
