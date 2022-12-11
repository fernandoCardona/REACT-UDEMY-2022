import { configureStore } from "@reduxjs/toolkit";
import { calendarSlice } from "./calendar/calendarSlice";
import { uiSlice } from "./ui/uiSlice";

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        calendar: calendarSlice.reducer,    
    },
    //Solucion al ERROR de serializacion de la fecha en la consola
    middleware:( getDefaultMiddleware ) => getDefaultMiddleware({
        serializableCheck: false
    })
})