import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";



export const FormWithCustomHook = () => {
     
 
    const {formState, handleInputChange, handleResetForm, username, email, password  } = useForm({
        username: '',
        email: '',
        password: ''
    })
    // const { username, email, password } = formState;

    useEffect(() => {
        // console.log('formState Change')
    },[formState])
    useEffect(() => {
        // console.log('username Change')
    },[username])
    useEffect(() => {
        // console.log('email Change')
    },[email])
    useEffect(() => {
        // console.log('password Change')
    },[password])

     


    return (
        <div>
            <h1>Form with Custom Hook</h1>
            <hr />

            <form>
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Username"
                    name="username"
                    value={ username }
                    onChange={ handleInputChange }
                />

                <input 
                    type="email" 
                    className="form-control mt-2"
                    placeholder="Your mail"
                    name="email"
                    value={ email }
                    onChange={ handleInputChange }
                />

                <input 
                    type="pasword" 
                    className="form-control mt-2"
                    placeholder="Password"
                    name="password"
                    value={ password }
                    onChange={ handleInputChange }
                />

                <button 
                    type="submit"
                    className="btn btn-primary mt-2"
                    onClick={ handleResetForm }
                >
                    Borrar
                </button>
            </form>

             
            
        </div>
    )
}


