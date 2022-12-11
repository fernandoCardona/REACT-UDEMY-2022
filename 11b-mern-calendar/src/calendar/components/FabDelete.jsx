//Importaciones de React:

//Importaciones de Terceros:


//Importaciones de la App:
import { useCalendarStore, useUiStore } from '../../hooks';
import './Fabs.css'


export const FabDelete = () => {
    
    //importamos la funcion openDateModal del hook useCalendarStores
    const { startDeletindEvent, hasEventSelected } = useCalendarStore();

    const handleClickDeleteEvent = () => {
        startDeletindEvent();
    }

    return (
        <button 
            className="btn btn-danger fab-danger"
            onClick={ handleClickDeleteEvent }
            style={{ 
                display: hasEventSelected ? 'block' : 'none',
            }}
        >
            <i className="fas fa-trash-alt"></i>
        </button>
    )
}
