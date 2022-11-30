import { useForm } from '../hooks/useForm';

export const ToDoAdd = ( { onNewToDo } ) => {

    const { handleInputChange, handleResetForm, description } = useForm({
            description: ''  
    });
    const onFormSubmit = (e) => {
        e.preventDefault();
        if( description.length <= 1 ) return;

        const newToDo = {
            id: new Date().getTime(),
            description,
            done: false
        }

        onNewToDo( newToDo );
        handleResetForm();
    }

    return (
        <>
            <form onSubmit={ onFormSubmit }>
                <input 
                    type="text" 
                    placeholder="Que hay que hacer"
                    className="form-control"
                    name="description"
                    value={ description }
                    onChange={ handleInputChange }
                />
                <button 
                type="submit"
                    className="btn btn-outline-primary mt-1"
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
