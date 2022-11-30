import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";


export const SimpleForm = () => {
    const {formState, handleInputChange, username, email } = useForm({
        username: '',
        email: '' 
    })
    // const { username, email } = formState;

    useEffect(() => {
        // console.log('formState Change')
    },[formState])
    useEffect(() => {
        // console.log('username Change')
    },[username])
    useEffect(() => {
        // console.log('email Change')
    },[email])


    return (
        <div>
            <h1>SimpleForm</h1>
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

                <button 
                    type="submit" 
                    className="btn btn-primary mt-2"
                >
                    Submit
                </button>
            </form>

            <br/><br/>
            {
                ( username === 'strider2' ) && <Message/>
            }
            
        </div>
    )
}


