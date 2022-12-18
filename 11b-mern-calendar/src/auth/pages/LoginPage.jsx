//Importaciones de React

//Importaciones de Terceros
import { useEffect } from 'react';
import Swal from 'sweetalert2';
//Importaciones de la App
import { useAuthStore, useForm } from '../../hooks';
import './LoginPage.css';

//Instancia patra el formulario Login
const loginFormFields = {
    loginEmail: '',
    loginPassword: '',
}
//Instancia patra el formulario Registro
const registerFormFields = {
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    registerPassword2: '',
}


export const LoginPage = () => {
    //22.2-Usamos 'useAuthStore' para obtener la funcion 'startLogin'
    const { startLogin, startRegister, errorMessage } = useAuthStore();

    //20.1-Login form
    const { loginEmail, loginPassword, handleInputChange:handleLoginInputChange } = useForm( loginFormFields );

    const loginSubmit = (e) => {
        e.preventDefault();
        //console.log( { loginEmail, loginPassword } );
        //22.3-Utilizamos la funcion 'startLogin' pasandole los argumentos como un objeto:
        startLogin( { email:loginEmail, password:loginPassword } );
    }
    //20.2-Register Form
    const { registerName, registerEmail, registerPassword, registerPassword2, handleInputChange:handleRegisterInputChange } = useForm( registerFormFields );

    const registerSubmit = (e) => {
        e.preventDefault();
        if( registerPassword !== registerPassword2) {
            Swal.fire( 'Error en registro', 'Las Contraseñas no son iguales', 'error' );
            return;
        }
        startRegister({name: registerName, email:registerEmail, password:registerPassword, registerPassword2});
    }

    useEffect(() => {
        if ( errorMessage !== undefined ) {
            Swal.fire( 'Error en la autentificacion', errorMessage, 'error' );
        }
    }, [errorMessage]);
    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={ loginSubmit }>
                        <div className="form-group mb-2">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name='loginEmail'
                                value={ loginEmail }
                                onChange={ handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name='loginPassword'
                                value={ loginPassword }
                                onChange={ handleLoginInputChange}
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={ registerSubmit }>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name='registerName'
                                value={ registerName }
                                onChange={ handleRegisterInputChange }
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name='registerEmail'
                                value={ registerEmail }
                                onChange={ handleRegisterInputChange }
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña" 
                                name='registerPassword'
                                value={ registerPassword }
                                onChange={ handleRegisterInputChange }
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña" 
                                name='registerPassword2'
                                value={ registerPassword2 }
                                onChange={ handleRegisterInputChange }
                            />
                        </div>

                        <div className="d-grid gap-2">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" 
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
