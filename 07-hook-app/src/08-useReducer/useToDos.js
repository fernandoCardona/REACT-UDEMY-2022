import { useEffect, useReducer } from 'react';
import { toDoReducer } from './toDoReducer';

const initialState = [];
const init = () => {
    return JSON.parse( localStorage.getItem('toDos') ) || [];
}


export const useToDos = () => {

    const [ toDos, dispatch] = useReducer( toDoReducer, initialState, init );

    const toDosCount = toDos.length;
    const pendingToDos = toDos.filter( toDo => !toDo.done ).length

    useEffect(() => {
        localStorage.setItem('toDos', JSON.stringify( toDos ) );
    }, [toDos])
    

    const handleNewToDo = (toDo) => {
        const action = {
            type: '[TODO] Add ToDo',
            payload: toDo
        }
        dispatch( action );
    }

    const handleDeleteToDo = ( id ) => {
        const action = {
            type: '[TODO] Remove ToDo',
            payload: id
        }
        dispatch( action ); 
    }
    const handleToggleToDo = ( id ) => {
        const action = {
            type: '[TODO] Toggle ToDo',
            payload: id
        }
        dispatch( action ); 
    }
    return {
        toDos,
        toDosCount,
        pendingToDos,
        handleNewToDo, 
        handleDeleteToDo, 
        handleToggleToDo
    }
}
