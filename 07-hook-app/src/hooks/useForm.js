import { useState } from "react";



export const useForm = ( initialForm = {} ) => {

    const [formState, setFormState] = useState( initialForm );

    const handleInputChange = ( { target } ) => {
        const { name, value } = target;
        setFormState({ 
            ...formState,
           [ name ]: value 
        });
    }
    const handleResetForm = () => {
        setFormState( initialForm );
    }
    

    return {
        ...formState,
        formState,
        handleInputChange,
        handleResetForm
    }
}

//ESTO ES LO QUE INCLUIREMOS EN NUESTRO FUNCTIONAL COMPONENT:

// const {formState, handleInputChange, username, email, password  } = useForm({
//     username: '',
//     email: '',
//     password: ''
// })