import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { purpleTheme } from "./"


//5.1-Despues de instalar Material ui segun documentacion 
//5.2-creamos la estructura de contenedores necesaria para materiaal ui Theme ThemeProvider y CssBaseline que contienen como children nuestra JournalApp en el documento mail.jsx
//6.2-importamos la plantilla purpleTheme
export const AppTheme = ( { children } ) => {
  return (

    <ThemeProvider theme={ purpleTheme }>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      { children }
    </ThemeProvider>
  )
}
