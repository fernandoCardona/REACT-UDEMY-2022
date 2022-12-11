//Importaciones de React:
import { useDispatch, useSelector } from "react-redux";

//Importaciones de Terceros:

//Importaciones de la App:
import { handleAddNewEvent, handleSetActiveEvent, handleUpdateEvent, handleDeleteEvent } from "../store"; 


// Custom hook para manejar todo lo relacionaado con el Calendar stote.
export const useCalendarStore = () => {

    const dispatch = useDispatch();

    //Con useSelector tenemos acceso al state general ( state.calendar )
    const { events, activeEvent } = useSelector( state => state.calendar );

    //Funcion 'setActiveEvent' que dispara nuestra accion de Store 'handleSetActiveEvent' 
    const setActiveEvent = ( calendarEvent ) => {
        dispatch( handleSetActiveEvent( calendarEvent ) );
    }

    //Funcion 'startsavingevent' que dispara nuestra accion de Store 'handleAddNewEvent' 
    const startSavingEvent = async( calendarEvent ) => {
        //TODO: Llevar el evento al backend

        //Condicional para diferenciar si estamos creando (el evento contiene calendarEvent.id ) o actualizando el evento (el evento No contiene calendarEvent.id )
        if ( calendarEvent._id ) {
            //actualizando el evento
            dispatch( handleUpdateEvent( { ...calendarEvent } ) );
        }else {
            //Creando el evento
            dispatch( handleAddNewEvent( { 
                ...calendarEvent,
                _id: new Date().getTime()
            } ) );
        }
        
    }

    //Funcion 'deleteEvent' que dispara nuestra accion de Store 'handleDeleteEvent' para borrar un evento
    const startDeletindEvent = async() => {
        dispatch( handleDeleteEvent() );
    }

    return {
        //Properties:
            events, 
            activeEvent, 
            //propiedas que determina si tenemos un evento activos
            hasEventSelected: !!activeEvent,

        //Metodos:
            setActiveEvent,
            startSavingEvent,
            startDeletindEvent,
    }
}