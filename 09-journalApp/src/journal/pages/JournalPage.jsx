
//importaciones React
import { useDispatch, useSelector } from "react-redux";

//importaciones Material ui
import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";

//importaciones JournalApp
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView, NoteView } from "../views";
import { startNewNote } from "../../store/journal";


export const JournalPage = () => {
    const dispatch = useDispatch();
    const { isSaving, active } = useSelector( state => state.journal );
    const handleClickNewnote = () => {
      dispatch( startNewNote() )   
    }
    return (
      <>  
          <JournalLayout>
              {/* //17.4- Condicional si tenemos una nota activa mostramos un componente o otro */}
              {
                ( !!active )
                ? <NoteView/>
                : <NothingSelectedView/>
              }
              
               
              <IconButton
                disabled={ isSaving }
                size='large'
                sx={{ 
                  color: 'white',
                  backgroundColor: 'error.main',
                  ':hover': { backgroundColor: 'error.main',opacity: 0.9 },
                  position: 'fixed',
                  right: 50,
                  bottom: 50
                }}
                onClick={ handleClickNewnote }
              >
                  <AddOutlined sx={{ fontSize:30 }}/>
              </IconButton>
          </JournalLayout>
      </>
      
    )
}
