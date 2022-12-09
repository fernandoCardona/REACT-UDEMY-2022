//Importaciones de React
import { useDispatch, useSelector } from "react-redux";
import { useMemo, useEffect, useRef } from "react";

//Importaciones de Material ui
import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { Box, Button, Grid, IconButton, TextField, Typography } from "@mui/material";

//Paquetes de terceros
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css'

// Importaciones de la app
import { ImageGallery } from "../components";
import { useForm } from "../../hooks";
import { setActiveNote, startDeletingdNote, startSavingNote, startUploadingFiles } from "../../store/journal";
 






export const NoteView = () => {
    const dispatch = useDispatch();

    //19.2-Usamos el hook de useForm para obtener la informacion de NoteView, con useSelector nos traemos del state.journal la info de la nota activa u le pasamos note al useForm como argumento
    const { active:note, messageSaved, isSaving } = useSelector( state => state.journal );
    const { body, title, date, handleInputChange, formState } = useForm( note );
    
    const dataString = useMemo( () => {
        const newDate = new Date( date );
        return  newDate.toUTCString();
    }, [ date ])

    //19.3-actualizar contenido de una note con un useEffect atraves del formState del custom hook useForm 
    useEffect(() => {
        dispatch( setActiveNote( formState ) );    
    }, [ formState ]);
    //19.4-creamos la c¡funcion 'handleSaveNote', que atraves del click en el boton guardar dispararemos la funcion asincrona almacenada en 'thunks' de 'store/journal/thunks' para guardar los cambios en la nota actual  
    const handleSaveNote = () => {
        dispatch( startSavingNote() );
    }

    //20.1-disparamos SeetAlert a traves de un useeffect para mostrar mensaje de actualizacion de nota actual
    useEffect(() => {
        //condicional para filtrar messageSaved con contenido o vacios
        if( messageSaved.length > 0 ){
            Swal.fire('Nota actualizada', messageSaved, 'success');           
        } 
    }, [ messageSaved ]);
    //21.3-Usamos 'useRef' para activar el input oculto en el layout de subida de archivos
    const fileInputRef = useRef();

    //21.1-creamos un input con el atributo multiple para la subida de archivos de imagene a traves de la funcion 'handleFileInputChange' de esta funcion desestructuramos el target.
    const handleFileInputChange = ( { target } ) => {
        
        if( target.files === 0) return;
         
        dispatch( startUploadingFiles( target.files ) );
    }
    //22.1-Borrado de notas de nuestra append
     const handleDelete = ( { target } ) => {
        dispatch( startDeletingdNote() );
     }

    return (
        <Grid container 
            className="animate__animated animate__fadeIn animate__faster"
            direction="row" 
            justifyContent="space-between" 
            alignItems="center" 
            sx={{ mb: 1}}
        >
            <Grid item>
                <Typography fontSize={ 39 } fontWeight="light"> { dataString }</Typography>
            </Grid>
            <Grid item>

                <input type="file"
                    multiple 
                    onChange={ handleFileInputChange }
                    style={ { display: 'none' } }
                    ref={ fileInputRef }
                />
                <IconButton 
                    color="primary" 
                    disabled={ isSaving }
                    onClick={ () => fileInputRef.current.click() }
                >
                    <UploadOutlined/>
                </IconButton>

                <Button 
                    disabled={ isSaving }
                    onClick={ handleSaveNote }
                    color='primary' 
                    sx={{ padding: 2 }}
                >
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }}/>
                    Guardar
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    placeholder='Ingrese un titulo'
                    label='Titulo'
                    sx={{ border: 'none', mb: 1, borderRadius: 2}}
                    name='title'
                    value={ title }
                    onChange={ handleInputChange }
                />
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    multiline
                    placeholder='¿?que sucedio hoy?'
                    minRows={ 5 }
                    sx={{ borderRadius: 2}}
                    name='body'
                    value={ body }
                    onChange={ handleInputChange }
                />
            </Grid>

            <Grid container
                justifyContent='end'
            >
                <Button
                    onClick={ handleDelete }
                    sx={{ mt:2 }}
                    color='error'
                >
                    <DeleteOutline/>
                    Borrar
                </Button>
            </Grid>
            <ImageGallery images={ note.imageUrls }/>

        </Grid>
    )
}
