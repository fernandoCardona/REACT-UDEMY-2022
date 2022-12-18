import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { calendarSlice } from "./calendar/calendarSlice";
import { uiSlice } from "./ui/uiSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        ui: uiSlice.reducer,
        calendar: calendarSlice.reducer,    
    },
    //Solucion al ERROR de serializacion de la fecha en la consola
    middleware:( getDefaultMiddleware ) => getDefaultMiddleware({
        serializableCheck: false
    })
})