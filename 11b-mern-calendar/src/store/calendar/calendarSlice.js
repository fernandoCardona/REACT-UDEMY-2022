import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

// const tempEvent = {
//     _id: new Date().getTime(),
//     title: 'Cumpleaños del jefe',
//     notes: 'Hay que comprar el pastel',
//     start: new Date(),
//     end: addHours( new Date(), 2 ),
//     bgColor: '#FAFAFA',
//     user: { 
//         _id: '123',
//         name: 'Fernando Jr',
//     }
// }

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        isLoadingEvents: true,
        events: [
            //tempEvent,
        ],
        activeEvent: null
    },
    reducers: {
        handleSetActiveEvent: ( state, { payload } ) => {
            state.activeEvent = payload;
        },
        handleAddNewEvent: ( state, { payload } ) => {
            //insertamos la nota en nuestros events:
            state.events.push( payload );
            //limpiamos el evento Activo:
            state.activeEvent =  null;
        },
        handleUpdateEvent: ( state, { payload } ) => {
            state.events = state.events.map( event => {
                if( event.id === payload.id ){
                    return payload;
                }
                return event;
            });
        },
        handleDeleteEvent: ( state ) => {
            //Condicionar para saber si tenemos evento activos
            if( state.activeEvent ) {
                //Con filter regresamos un arreglo con todos los eventos menos el activo
                state.events = state.events.filter( 
                    event => event.id !== state.activeEvent.id 
                );
                //activeEvent lo pasamos a null
                state.activeEvent = null;
            }
            
        },
        //28.1-Creamos una funcion 'handleLoadEvents'para llevar nuestros eventos de la Db al store:
        handleLoadEvents: ( state, { payload = [] } ) => {
            state.isLoadingEvents= false;
            //sate.events = payload
            //Recorremos el payload que contiene los eventos con un forEach:
            payload.forEach( event => {
                const exists = state.events.some( dbEvent => dbEvent.id === event.id );
                if ( !exists ) {
                    state.events.push( event )
                }
            })
        },
        //31.1- Funcion de limpieza del state al hacer logout
        handleLogoutCalendar: ( state ) => {
            state.isLoadingEvents = true;
            state.events = [];
            state.activeEvent = null;
        }
    }
});


// Action creators are generated for each case reducer function
export const { 

    handleAddNewEvent,
    handleDeleteEvent,
    handleLoadEvents,
    handleSetActiveEvent, 
    handleUpdateEvent,
    handleLogoutCalendar,
    
} = calendarSlice.actions;