import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';



const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      
    },
  },
  input: {
    borderRadius: 4,
    width: '100%',
    maxWidth: '136px',
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid White',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Roboto',
      'sans-serif',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
    },
  },
}))(InputBase);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: '0 ',
    width: '136px',
    height: '36px'
  },
  labeled:{
      zIndex: 3,
    "&.MuiInputLabel-shrink": {
        display: 'none'
      },
      "&.MuiInputLabel-formControl": {
        top: "-12px",
        left: "10px",
        pointerEvents: "none"
      }
  }
}));

export default function SelectItem(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = event => {
    setAge(event.target.value);
  };
  return (
    <div>
      <FormControl className={classes.margin}>
        <InputLabel id="demo-customized-select-label" className={classes.labeled} >{props.DescriptionItem}</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={age}
    
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
   
    </div>
  );
}


