//Importaciones de React:
import { useDispatch, useSelector } from "react-redux";


//Importaciones de Terceros:

//Importaciones de la App:
import { handleCloseDateModal, handleOpenDateModal } from "../store";


// Custom hook para manejar todo lo relacionaado con el UI stote.
export const useUiStore = () => {

    const dispatch = useDispatch();

    //Con useSelector tenemos acceso al state general ( state.ui )
    const { isDateModalOpen } = useSelector( state => state.ui );

    //Funcion openDateModal atraves del Store
    const openDateModal = () => {
        //Utilizamos dispatch para  disparar la funcion handleOpenDateModal que esta en nuestro uiSlice y cambia el estado de isDateModalOpen de nuestro Store
        dispatch( handleOpenDateModal() )
    }
    //Funcion openDateModal atraves del Store
    const closeDateModal = () => {
        //Utilizamos dispatch para  disparar la funcion handleCloseDateModal que esta en nuestro uiSlice y cambia el estado de isDateModalOpen de nuestro Store
        dispatch( handleCloseDateModal() )
    }
    const toggleDateModal = () => {
        ( isDateModalOpen ) ? openDateModal() : closeDateModal();
    }



    return {
        //Properties:
            isDateModalOpen,

        //Metodos:
            openDateModal,
            closeDateModal,
            toggleDateModal,
    }
}