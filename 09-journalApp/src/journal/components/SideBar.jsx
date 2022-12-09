//Importaciones de Redux
import { useSelector } from "react-redux";

//Importaciones de Materia ui
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";

//Importaciones de la app 
import { SideBarItem } from "./";


export const SideBar = ( { drawerWidth = 240 } ) => {

    //17.1 Cambiamos el nombre segun el usuario utilizando useSelector.
    const { displayName } = useSelector( state => state.auth );
    const { notes } = useSelector( state => state.journal );

  return (
    <Box component='nav'
        sx={{ 
            width: { sm: drawerWidth},
            flexShrink: { sm: 0},
        }}
    >
        <Drawer variant='permanent'
            open={ true }
            sx={{
               display: { xs: 'block' },
               '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } 
            }}
        >
            <Toolbar>
                <Typography variant='h6' noWrap>{ displayName }</Typography>

            </Toolbar>
            <Divider/>
            <List>
                { 
                    notes.map( note => (
                        <SideBarItem key={ note.id } { ...note }/>
                    ))
                }
            </List>
        </Drawer>
    </Box>
  )
}
