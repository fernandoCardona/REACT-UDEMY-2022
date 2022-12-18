//Importaciones de React:



//Importaciones de Terceros:

//Importaciones de la App:
import { useAuthStore } from "../../hooks";

export const Navbar = () => {

    const { user, startLogOut } = useAuthStore();
    return (
        <div className="navbar navbar-dark bg-dark mb-4 px-4">
            <span className="navbar-brand">
                <i className="fas fa-calendar-alt"></i>
                &nbsp;
                { user.name }
            </span>

            <button 
                className="btn btn-outline-danger"
                onClick={ startLogOut }
            >
                <i className="fas fa-sign-out-alt"></i>
                &nbsp;
                <span>Salir</span>
            </button>
        </div>
    )
}
