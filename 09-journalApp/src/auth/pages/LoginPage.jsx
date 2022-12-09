//Importaciones de Core
import { useDispatch, useSelector } from 'react-redux';
import {Link as RouterLink } from 'react-router-dom';
import { useMemo } from 'react';
//Importaciones de Materia UI
import { Google } from '@mui/icons-material';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
//Importaciones propias de la app
import { AuthLayout } from '../layout/AuthLayout';
import { startGoogleSingIn, startLoginWithEmailPassword } from '../../store/auth';
//Importaciones de Hooks Propios
import { useForm } from '../../hooks';



const formData = {
    email: '',
    password: ''
}


export const LoginPage = () => {
    //10.2-usamos usSelector para crear una condicional que deshabilite los botones de login y googleLogin cuando el status es authentificate
    const { status, errorMessage } = useSelector( state => state.auth );

    //8.6-Importamos useDispatch para poder disparar nuestras funciones del authSlices 
    const dispatch = useDispatch();
    //8.1-Impoortamos el customHook 'useForm' para recoger los datos del formulario Login
    const { email, password, handleInputChange, formState } = useForm( formData );
    //10.3-usamos useMemo para memorizar el resultado para la condiciona isAuthenticating
    const isAuthenticating = useMemo( () => status === 'checking', [status]);


    //8.2-Creamos la funcion handleSubmit para recoger los datos de los Input.
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log( formState )
        //8.7-Hacemos el dispatch de la accion que llamamos desl authSlice
        dispatch( startLoginWithEmailPassword( { email, password } ) );
    }

    //8.3-Creamos la funcion handleGoogleSingIn para login con Google.
    const handleGoogleSingIn = () => {
         
        //console.log( 'Click handleGoogleSingIn!!!')
        dispatch( startGoogleSingIn() );
    }



    return (
        <>
            <AuthLayout title="Login">
                <form 
                    onSubmit={ handleSubmit } 
                    className="animate__animated animate__fadeIn animate__faster"
                >
                    <Grid container>  
                        <Grid item xs={ 12 } sx={{ mt: 2 }}>
                            <TextField 
                                label="Correo" 
                                type="email" 
                                placeholder="correo@correo.com"
                                fullWidth
                                name="email"
                                value={email}
                                onChange={ handleInputChange }
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
                                onChange={ handleInputChange }
                            />
                        </Grid> 
                        <Grid container 
                            display={ !!errorMessage ? '' : 'none' } 
                            sx={{ mt: 2 }}
                        >
                            <Grid item xs={ 12 }>
                                <Alert severity="error">{ errorMessage }</Alert>
                            </Grid>
                        </Grid>
                        

                        <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                            <Grid item xs={ 12 } sm={ 6 }>
                                <Button 
                                    disabled={ isAuthenticating }
                                    type="submit" 
                                    variant='contained' 
                                    fullWidth
                                >
                                    Login
                                </Button>
                            </Grid>
                            <Grid item xs={ 12 } sm={ 6 }>
                                <Button 
                                    disabled={ isAuthenticating }
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
