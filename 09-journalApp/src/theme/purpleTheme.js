import { createTheme } from "@mui/material";
import { red }  from '@mui/material/colors'

//6.1- Creamos nuestra primera plantilla de material ui purpleThem 
export const purpleTheme = createTheme({
    palette: {
      primary: {
        main: '#262254',
      },
      secondary: {
        main: '#543884',
      },
      error: {
        main: red.A400,
      },
    },
  });