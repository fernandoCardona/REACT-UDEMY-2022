//Importaciones de React
import { useMemo } from "react";
import { useDispatch } from "react-redux";

//Importaciones de Materia ui
import { TurnedInNot } from "@mui/icons-material";
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

//Importaciones de la app
import { setActiveNote } from "../../store/journal";




export const SideBarItem = ( { title = '' , body, id, date, imageUrls = [] } ) => {
    const dispatch = useDispatch();
    //19.1-Seleccionamos la nota del sidebar mediante onclick
    const handleClickNote = () => {
        dispatch( setActiveNote( { title, body, id, date, imageUrls } ) );
    }

    const newTitle = useMemo( () => {
        return  ( title.length > 17 )
                ? title.substring( 0, 10) + '...' 
                : title; 
    }, [ title ])

    const newBody = useMemo( () => {
        return  ( body.length > 25 )
                ? body.substring( 0, 25) + '...' 
                : body; 
    }, [ body])

    return (
        <>
            <ListItem key={ id } disablePadding>
                <ListItemButton onClick={ handleClickNote }>
                    <ListItemIcon>
                        <TurnedInNot/>
                        
                    </ListItemIcon>
                    <Grid container>
                        <ListItemText primary={ newTitle } />
                        <ListItemText secondary={ newBody }/>
                    </Grid>
                </ListItemButton>
            </ListItem>  
        </>
    )
}
