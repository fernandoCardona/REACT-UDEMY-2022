import { useRef } from "react"



export const FocusScreen = () => {

    const inputRef = useRef();
    const handleRef = () => {
        inputRef.current.select();
    }

    return (
        <div>
            <h1>FocusScreen</h1>
            <hr />

            <input 
                ref={ inputRef }
                type="text" 
                className="form-control"
                placeholder="ingresa un nombre"
            />
            <button 
                className="btn btn-secondary mt-2"
                onClick={ handleRef }
            >
                Set Focus
            </button>

        </div>
    )
}
