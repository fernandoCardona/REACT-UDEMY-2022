//Importaciones de Core
import { useDispatch } from 'react-redux';
import {Link as RouterLink } from 'react-router-dom';
//Importaciones de Materia UI
import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
//Importaciones propias de la app
import { AuthLayout } from '../layout/AuthLayout';
import { checkingAuthentication, startGoogleSingIn } from '../../store/auth';
//Ikportaciones de Hooks Propios
import { useForm } from '../../hooks';


 


export const LoginPage = () => {
    //8.6-Importamos useDispatch para poder disparar nuestras funciones del authSlices 
    const dispatch = useDispatch();
    //8.1-Impoortamos el customHook 'useForm' para recoger los datos del formulario Login
    const { email, password, handleInputchange, formState } = useForm({
        email: 'correo@correo.com',
        password: '123456'
    });

    //8.2-Creamos la funcion handleSubmit para recoger los datos de los Input.
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log( formState )
        //8.7-Hacemos el dispatch de la accion que llamamos desl authSlice
        dispatch( checkingAuthentication() );
    }

    //8.3-Creamos la funcion handleGoogleSingIn para login con Google.
    const handleGoogleSingIn = () => {
         
        console.log( 'Click handleGoogleSingIn!!!')
        dispatch( startGoogleSingIn() );
    }



    return (
        <>
            <AuthLayout title="Login">
                <form onSubmit={ handleSubmit }>
                    <Grid container>  
                        <Grid item xs={ 12 } sx={{ mt: 2 }}>
                            <TextField 
                                label="Correo" 
                                type="email" 
                                placeholder="correo@correo.com"
                                fullWidth
                                name="email"
                                value={email}
                                onChange={ handleInputchange }
                            />
                        </Grid>
                        <Grid item xs={ 12 } sx={{ mt: 2 }}>
                            <TextField 
                                label="Contraseña" 
                                type="password" 
                                placeholder="Contraseña"
                                fullWidth
                                name="password"
                                value={ password }
                                onChange={ handleInputchange }
                            />
                        </Grid> 
                        <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                            <Grid item xs={ 12 } sm={ 6 }>
                                <Button type="submit" variant='contained' fullWidth>
                                    Login
                                </Button>
                            </Grid>
                            <Grid item xs={ 12 } sm={ 6 }>
                                <Button 
                                    variant='contained' 
                                    fullWidth
                                    onClick={ handleGoogleSingIn }
                                >
                                    <Google/>
                                    <Typography sx={{ ml: 1 }}>
                                        Google
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container direction='row' justifyContent='end'>
                            <Link component={ RouterLink } color='inherit' to='/auth/register'>
                                Crea uns cuenta
                            </Link>
                            
                        </Grid>
                    </Grid>
                </form>
            </AuthLayout>
                    
                    

        
        </>
        
    )
}
