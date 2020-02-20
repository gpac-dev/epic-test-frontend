import React from 'react'
import TextField from '@material-ui/core/TextField';
import {withStyles} from "@material-ui/core/styles";

const CssTextField = withStyles({
    root: {
      margin: "10px 0",
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


// export default CssTextField;

//   function InputFill(){
//     const classes = withStyles();
//         return(
//             <div className={classes.root}>
//                 <CssTextField
//         className={classes.margin}
//         label="E-mail"
//         variant="outlined"
//         id="custom-css-outlined-input"
//       />
//             </div>
//         );
//   }


  //export default InputFill;

  function BasicTextFields() {
    const classes = withStyles();
  
    return (
      <form className={classes.root} noValidate autoComplete="on">
      <CssTextField
        className={classes.margin}
        label="E-mail"
        variant="outlined"
        id="custom-css-outlined-input"
      />
      <CssTextField
        className={classes.margin}
        label="Password"
        variant="outlined"
        id="custom-css-outlined-input"
      />
      <button className="u-margin-15">
                          Log in
                      </button> 
      </form>
    );
  }
  export default BasicTextFields;