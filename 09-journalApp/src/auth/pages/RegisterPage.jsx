//Importaciones de React y react-router-dom
import { useState } from 'react';
import {Link as RouterLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//Importaciones de Materia UI
import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';

//Importaciones de Hooks Propios
import { useForm } from '../../hooks';

//Importaciones propias de la app
import { AuthLayout } from '../layout/AuthLayout';
import { startCreatingUserWithEmailPassword } from '../../store/auth';



const formData = {
    displayName: '',
    email: '',
    password: ''
    
}
//11.3-Creamos un objeto nuevos de validacion de nestro formulario
const formValidations = {
    email: [ (value) => value.includes('@'), 'El correo dbe contener una @.'],
    password: [ (value) => value.length >= 6, 'El password debe contener mas de 6. digitos'],
    displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio.']
}

export const RegisterPage = () => {

    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = useState(false);

    //11.1-Impoortamos el customHook 'useForm' para recoger los datos del formulario Register
    const { 
        formState, displayName, email, password, handleInputChange, isFormValid, displayNameValid, emailValid, passwordValid  
    } = useForm( formData, formValidations );
   

    //11.2- Conectamos los campos respetivos con los inputs del formulario Register
    const handleSubmit = (e) => {
        e.preventDefault();
        
        setFormSubmitted(true);

        if (!isFormValid ) return;
        
        dispatch( startCreatingUserWithEmailPassword( formState ) );
    }

    return (
        <>
            <AuthLayout title="Crear cuenta">
            
                <form onSubmit={ handleSubmit }>
                    <Grid container>  
                    
                        <Grid item xs={ 12 } sx={{ mt: 2 }}>
                            <TextField 
                                label="Nombre Completo" 
                                type="text" 
                                placeholder="Escribe tu nombre completo"
                                fullWidth
                                name="displayName"
                                value={ displayName }
                                onChange={ handleInputChange }
                                error={ !!displayNameValid && formSubmitted }
                                helperText={ displayNameValid }
                            />
                        </Grid>
                        <Grid item xs={ 12 } sx={{ mt: 2 }}>
                            <TextField 
                                label="Correo" 
                                type="email" 
                                placeholder="correo@correo.com"
                                fullWidth
                                name="email"
                                value={ email }
                                onChange={ handleInputChange }
                                error={ !!emailValid && formSubmitted }
                                helperText={ emailValid }
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
                                error={ !!passwordValid && formSubmitted }
                                helperText={ passwordValid }
                            />
                        </Grid> 

                        <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                            <Grid item xs={ 12 }>
                                <Button 
                                    type="submit"
                                    variant='contained' 
                                    fullWidth
                                >
                                    Crear cuenta
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container direction='row' justifyContent='end'>
                            <Typography sx={{ mr:1 }}>¿Ya tienes una cuenta?</Typography>
                            <Link component={ RouterLink } color='inherit' to='/auth/login'>
                                Login
                            </Link>
                            
                        </Grid>
                    </Grid>
                </form>
            </AuthLayout>
                    
                    

        
        </>
        
    )
}
