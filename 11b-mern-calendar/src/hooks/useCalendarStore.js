//Importaciones de React:
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { calendarApi } from "../api";
import { convertEventsToDateEvents } from "../helpers";

//Importaciones de Terceros:

//Importaciones de la App:
import { handleAddNewEvent, handleSetActiveEvent, handleUpdateEvent, handleDeleteEvent, handleLoadEvents } from "../store"; 


// Custom hook para manejar todo lo relacionaado con el Calendar stote.
export const useCalendarStore = () => {

    const dispatch = useDispatch();

    //Con useSelector tenemos acceso al state general ( state.calendar )
    const { events, activeEvent } = useSelector( state => state.calendar );
    const { user } = useSelector( state => state.auth );

    //Funcion 'setActiveEvent' que dispara nuestra accion de Store 'handleSetActiveEvent' 
    const setActiveEvent = ( calendarEvent ) => {
        dispatch( handleSetActiveEvent( calendarEvent ) );
    }

    //Funcion 'startsavingevent' que dispara nuestra accion de Store 'handleAddNewEvent' 
    const startSavingEvent = async( calendarEvent ) => {
        
        try {
            //TODO: Llevar el evento al backend

            //Condicional para diferenciar si estamos creando (el evento contiene calendarEvent.id ) o actualizando el evento (el evento No contiene calendarEvent.id )
            if ( calendarEvent.id ) {
                //28.1-hacemos la actualizacion en el backend de los eventos:
                await calendarApi.put(`/events/${ calendarEvent.id }`, calendarEvent );
                //actualizando el evento
                dispatch( handleUpdateEvent( { ...calendarEvent, user } ) );
                return;
            } 
            //Creando el evento
            const { data } = await calendarApi.post( '/events', calendarEvent );
            //26.1-cambiamos el _id: new Date() por id: data.evento.id u agregamos al user
            dispatch( handleAddNewEvent( { ...calendarEvent, id: data.evento.id, user } ) );

        } catch (error) {
            //28.2-Manejamos el error de actualizacion: 
            console.log(error);
            Swal.fire('Error al guardar la actualizacion', error.response.data.msg, 'error');

        }
        
         
        
    }

    //Funcion 'deleteEvent' que dispara nuestra accion de Store 'handleDeleteEvent' para borrar un evento
    const startDeletindEvent = async() => {
        try {
           
                //30.1-Eliminamos un evento en el front y backend de los eventos. lo identificamos con el 'activeEvent':
                await calendarApi.delete(`/events/${ activeEvent.id }` );
                //llamamos a la funcion para eliminar el elemento
                dispatch( handleDeleteEvent() );
        
        } catch (error) {
            //30.2-Manejamos el error de eliminacion de evento: 
            console.log(error);
            Swal.fire('Error al eliminar el evento', error.response.data.msg, 'error');
        }

        
    }

    //27.1-Creamos la funcion startLoadingEvents para cargar los eventos desde el servidor:
    const startLoadingEvents = async() => {
        try {
            
            //27.2-hacemos la peticion al backend de los eventos:
            const { data } = await calendarApi.get('/events');

            //27.4-le pasamos como argumentos data.eventos
            const events = convertEventsToDateEvents( data.eventos );
            dispatch( handleLoadEvents( events ) )
            //console.log(events)

        } catch (error) {
            console.log('Error cargando eventos.')
            console.log(error)
        }
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
            startLoadingEvents,
    }
}