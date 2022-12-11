import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
    _id: new Date().getTime(),
    title: 'Cumpleaños del jefe',
    notes: 'Hay que comprar el pastel',
    start: new Date(),
    end: addHours( new Date(), 2 ),
    bgColor: '#FAFAFA',
    user: { 
        _id: '123',
        name: 'Fernando Jr',
    }
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [
            tempEvent,
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
                if( event._id === payload._id ){
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
                    event => event._id !== state.activeEvent._id 
                );
                //activeEvent lo pasamos a null
                state.activeEvent = null;
            }
            
        },
    }
});


// Action creators are generated for each case reducer function
export const { 

    handleSetActiveEvent, 
    handleAddNewEvent,
    handleDeleteEvent,
    handleUpdateEvent
    
} = calendarSlice.actions;