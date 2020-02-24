import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



const StyledTextField = withStyles({
    root: {
      width: "100%",
      borderBottomColor: "White",
      "& label.Mui-focused": {
        color: "var(--black)",
        padding: "0 15px 0 3px",
        borderBottomColor: "White"
      },
      "& label.MuiInputLabel-shrink": {
        color: "var(--black)",
        padding: "0 15px 0 3px",
        borderBottomColor: "White"
      },
      "& .MuiInput-underline:before": {
        borderBottomColor: "White"
      },
      "& .Mui-focused:focus": {
        borderBottomColor: "White"
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "White"
      },
      "& .MuiOutlinedInput-root": {
        
      }
    }
  })(TextField);



export default function BlankInput(props) {
  const classes = withStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <StyledTextField 
      shrink={false}
      disableUnderline={false}
      disable={true}
      classes={classes.input}
        label={props.ZipCodeTag}
        variant="standard"
      />
    </form>
  );
}