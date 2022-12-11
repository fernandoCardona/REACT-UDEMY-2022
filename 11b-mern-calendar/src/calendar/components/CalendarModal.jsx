//Importaciones de React:
import { useEffect, useMemo, useState } from 'react';
import Modal from 'react-modal';

import es from 'date-fns/locale/es';

//Importaciones de Terceros:
import { addHours, differenceInSeconds } from 'date-fns';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

//Importaciones de la App:
import './CalendarModal.css'
import { useCalendarStore, useUiStore } from '../../hooks';

 
//Funcion importatda para cambio de idioma
registerLocale( 'es', es );

//Custom Styles del la ventana modal
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export const CalendarModal = () => {

    //State para la apertura y cierre de la ventana modal
    //Sutituimos este state por el isDateModalOpen del Store
    //const [ isOpen, setIsOpen ] = useState( true ); 

    //State del estado del Submit del format:
    const [ formSubmitted, setFormSubmitted ] = useState( false );

    //State del formulario de la ventana modal
    const [ formValues, setFormValues ] = useState({
        title: 'caca',
        notes: 'vaca',
        start: new Date(),
        end: addHours( new Date(), 2 )
    });

    //Store UiStore
    const { isDateModalOpen, closeDateModal } = useUiStore();

    //Store calendarStore
    const { activeEvent, startSavingEvent } = useCalendarStore();

    //Usamos 'useMeno' para memorizar y dispara la validacion del contenido title del formulario
    const titleClass = useMemo( () => {
        if ( !formSubmitted ) return '';
        return ( formValues.title.length > 0 ) ? '' : 'is-invalid';

    }, [ formValues.title, formSubmitted ])

    //Con useEffect actualizamos en contenido de la nota al activarla y abrirla con doblecClick
    useEffect(() => {
        if( activeEvent !== null ) {
            setFormValues( { ...activeEvent } );
        }
    }, [ activeEvent ]);

    //Funciones handleInputChange y handleDateChanged cpturan contenido texto del formulario del Modal
    const handleInputChange = ( { target } ) => {
        setFormValues({
            ...formValues,
            [ target.name ]: target.value


        })
    }
    //Capturamos Fecha y hora de los inputs del Modal
    const handleDateChanged = ( event, changing ) => {
        setFormValues({
            ...formValues,
            [changing]: event
        })
    }

    const handleCloseModal = () => {
        console.log('cerrando modal');
        //setIsOpen( false ); //lo quitamos al eliminar el state por el store general
        closeDateModal();
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        //cambiamos el estado del formSubmitted del Formulario
        setFormSubmitted( true );

        //Validacion de formulario Modal
        const difference = differenceInSeconds( formValues.end, formValues.start );
        if ( isNaN( difference ) || difference <= 0 ) {
            Swal.fire('Fechas inacorrectas', 'Revisar los campos de fecha', 'error' );
            console.log('error en la fechas');
            return;
        }
        if ( formValues.title.length <= 0 ) {
            console.log('el Evento no tiene titulo');
            return;
        }
        //Capturamos el contenido del nuevo evento
        await startSavingEvent( formValues );
        //Cerrar Modal
        closeDateModal();
        //Reset del Formulario modal
        setFormSubmitted( false );

    }

    return (
        <Modal
            isOpen={ isDateModalOpen }
            onRequestClose={ handleCloseModal }
            style={ customStyles }
            contentLabel="Example Modal"
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={ 200 }
        >
            <h1>Nuevo evento</h1>
            <hr />
            <form className="container" onSubmit={ handleSubmit }>

                <div className="form-group mb-2">
                    <label className="mb-1">Fecha y hora inicio</label>
                    <DatePicker 
                        selected={ formValues.start }
                        onChange={ (event) => handleDateChanged(event, 'start') }
                        className="form-control"
                        dateFormat="Pp"
                        showTimeSelect
                        locale="es"
                        timeCaption="Hora"
                    />
                </div>

                <div className="form-group mb-2">
                    <label className="mb-1">Fecha y hora fin</label>
                    <DatePicker 
                        minDate={ formValues.start }
                        selected={ formValues.end }
                        onChange={ (event) => handleDateChanged(event, 'end') }
                        className="form-control"
                        dateFormat="Pp"
                        showTimeSelect
                        locale="es"
                        timeCaption="Hora"
                    />
                </div>

                <hr />
                <div className="form-group mb-2">
                    <label>Titulo y notas</label>
                    <input 
                        type="text" 
                        className={`form-control ${ titleClass }`}
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={ formValues.title }
                        onChange={ handleInputChange }
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group mb-2">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={ formValues.notes }
                        onChange={ handleInputChange }
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
}
