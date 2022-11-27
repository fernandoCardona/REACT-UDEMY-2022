import React from 'react';

export const ToDoItem = ( { toDo, onDeleteToDo, onToggleToDo } ) => {



  return (
    <>
        <li key={ toDo.id } className="list-group-item d-flex justify-content-between">
            <span 
              className={ `align-self-center ${(toDo.done) ? 'text-decoration-line-through' : '' }` }
              onClick={ () => onToggleToDo( toDo.id ) }
            >
            {toDo.description}
            </span> 
            
            <button 
                type="submit"
                className="btn btn-danger"
                onClick={ () => onDeleteToDo( toDo.id ) }
            >
                Borrar
            </button>
        </li>
    </>
  )
}
