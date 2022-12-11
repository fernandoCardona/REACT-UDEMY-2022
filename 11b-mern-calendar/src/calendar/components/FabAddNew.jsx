//Importaciones de React:

//Importaciones de Terceros:
import { addHours } from 'date-fns';

//Importaciones de la App:
import { useCalendarStore, useUiStore } from '../../hooks';
import './Fabs.css'


export const FabAddNew = () => {
    //importamos la funcion openDateModal del hook useUiStores
    const { openDateModal } = useUiStore();
    //importamos la funcion openDateModal del hook useCalendarStores
    const { events, setActiveEvent } = useCalendarStore();

    const handleClickNewEvent = () => {
        setActiveEvent({
            title: '',
            notes: '',
            start: new Date(),
            end: addHours( new Date(), 2 ),
            bgColor: '#FAFAFA',
            user: { 
                _id: '123',
                name: 'Fernando Jr',
            }
        });
        openDateModal();
    }

    return (
        <button 
            className="btn btn-primary fab"
            onClick={ handleClickNewEvent }
        >
            <i className="fas fa-plus"></i>
        </button>
    )
}
