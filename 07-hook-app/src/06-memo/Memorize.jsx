import { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";
 


export const Memorize = () => {

    const { counter, handleIncrement } = useCounter(0);
    const [show, setShow] = useState( true) ;

    const handleShow =() => {
        setShow(!show);
    }

    return (
        <>
            <h1>Counter: <Small value={ counter }/></h1>
            <hr />
            <div className="counter">
                <button 
                    className="btn btn-secondary"
                    onClick={ handleIncrement }
                >
                    +1
                </button> 
                <button 
                    className="btn btn-primary"
                    onClick={ handleShow }
                >
                    Show/Hide {JSON.stringify(show)}
                </button> 
            </div>
            
        
        </>
    )
}


