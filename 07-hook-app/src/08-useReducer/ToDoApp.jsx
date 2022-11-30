import { ToDoAdd } from './ToDoAdd';
import { ToDoList } from './ToDoList'
import { useToDos } from './useToDos';



export const ToDoApp = () => {
    const { toDos, toDosCount, pendingToDos, handleNewToDo, handleDeleteToDo,handleToggleToDo } = useToDos();
    

    return (
        <>
            <h1>
                ToDoApp: { toDosCount }  ||  
                <small>
                    Pendientes: { pendingToDos }
                </small>  
            </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ToDoList 
                        toDos={ toDos } 
                        onDeleteToDo={ handleDeleteToDo }
                        onToggleToDo={ handleToggleToDo }
                    />
                    
                </div>
                <div className="col-5">
                    <h4>Agregar toDo</h4>
                    <hr />
                    <ToDoAdd onNewToDo={ handleNewToDo }/>
                </div>
            </div>

            
        </>
    )
}
