import { useState } from "react";


export const AddCategory = ( { onNewCategory } ) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        e.preventDefault();
        setInputValue(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
       
        if( inputValue.trim().length <= 1){
            return
        }
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }
    return (
        <form onSubmit={ onSubmit }>
            <input 
            type="text" 
            placeholder="Entry your category"
            value={ inputValue }
            onChange={ onInputChange }     
        />
        </form>
        

    )
}
