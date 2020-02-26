/** @jsx jsx */
import { jsx} from '@emotion/core';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { withStyles } from "@material-ui/core/styles";

const CssTextField = withStyles({
    root: {
      margin: "10px 0",
      width: "100%",
      "& label.Mui-focused": {
        color: "var(--black)",
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
          borderColor: "var(--black)",
          borderWidth: "1px"
        },
        "&.Mui-focused fieldset": {
          borderColor: "var(--black)",
          borderWidth: "1px"
        }
      }
    }
  })(TextField);

export default function ComboBox(props) {
    return (
        <Autocomplete
        id="combo-box-demo" 
        options={top100Films}
        getOptionLabel={option => option.title}
        style={{ width: '100%' }}
        renderInput={params => 
        <CssTextField {...params} label={props.LabelSelect} variant="outlined"  style={{ width: '100%' }} />}
    />
     
    );
  }

  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
    { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
   
  ];

