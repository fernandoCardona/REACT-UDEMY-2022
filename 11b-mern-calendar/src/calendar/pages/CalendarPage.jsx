//Importaciones de React:
import { useState } from 'react';

//Importaciones de Terceros:
import { Calendar} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { addHours } from 'date-fns';
 
//Importaciones de la App:
import { Navbar, CalendarEvent, CalendarModal, FabAddNew, FabDelete } from "../";
import { localizer, getMessagesES } from '../../helpers';
import { useUiStore, useCalendarStore } from '../../hooks';


//Evento del calendar:
// const events =[{
//     title: 'Cumpleaños del jefe',
//     notes: 'Hay que comprar el pastel',
//     start: new Date(),
//     end: addHours( new Date(), 2 ),
//     bgColor: '#FAFAFA',
//     user: { 
//         _id: '123',
//         name: 'Fernando Jr',
//     }
// }]


export const CalendarPage = () => {
    //importamos la funcion openDateModal del hook useUiStores
    const { openDateModal } = useUiStore();
    //importamos la funcion openDateModal del hook useCalendarStores
    const { events, setActiveEvent } = useCalendarStore();


    const [lastView, setLastView] = useState(localStorage.getItem( 'lastView' ) || 'week' );

    const eventPropGetter = ( event, start, end, isSelected ) => {

        const style = {
            backgroundColor: '#347CF7',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white'
        }
        return { style };
    }

    const handleDoubleClick = ( event ) => {
    
        //console.log({ doubleClick: event });
        openDateModal(); 

    }

    const handleSelect = ( event ) => {
    
        // console.log({ Click: event })
        setActiveEvent( event );

    }

    const handleViewChange = ( event ) => {
    
        localStorage.setItem( 'lastView', event );
        setLastView( event);
    }

    return (
        <>
            <Navbar/>
            <Calendar
                culture='es'
                localizer={ localizer }
                events={ events }
                defaultView={ lastView }
                startAccessor="start"
                endAccessor="end"
                style={ { height: 'calc(100vh - 80px)' } }
                messages= { getMessagesES() }
                eventPropGetter={ eventPropGetter }
                components={ {
                    event: CalendarEvent
                } }
                onDoubleClickEvent={ handleDoubleClick }
                onSelectEvent={ handleSelect }
                onView={ handleViewChange }
            />
            <CalendarModal />
            <FabAddNew />
            <FabDelete />
        </>
        
    )
}
