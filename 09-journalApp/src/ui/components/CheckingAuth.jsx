import { CircularProgress, Grid, Typography } from "@mui/material"

//15.1-creamos el componente CheckingAuth para mostrarlo durante la comprobacion del Auth
export const CheckingAuth = () => {

    return (
        <>
            <Grid container 
                spacing={ 0 }
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ 
                    minHeight:'100vh', 
                    backgroundColor:'primary.main', 
                    padding:4 
                }}
            >
                <Grid container 
                    direction='row'
                    justifyContent='center'
                >
                    <CircularProgress color='warning'/>
                </Grid>
            </Grid>
        </>
    )
}
