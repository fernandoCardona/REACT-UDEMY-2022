
import { parseISO } from 'date-fns';

//27.3-Creamos una funcion 'convertEventsToDateEvents' para convertir la fecha de cada evento. usando el paquete 'parseISO'
export const convertEventsToDateEvents = ( events = [] ) => {
    return events.map( event => {
        event.start = parseISO( event.start );
        event.end = parseISO( event.end );
        return event;
    })
}

