import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

 
const heavyStuff = (iterationNumber = 100 ) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Ahi vamos....')
    }
    return `${ iterationNumber } iteraciones realizadas`;
}

export const MemoHook = () => {

    const { counter, handleIncrement } = useCounter(4000);
    const [show, setShow] = useState( true) ;

    const handleShow =() => {
        setShow(!show);
    }

    const memorizeValue = useMemo( () => heavyStuff(counter), [counter])

    return (
        <>
            <h1>Counter: <small>{ counter }</small></h1>
            <hr />

            <h4>{ memorizeValue }</h4>

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