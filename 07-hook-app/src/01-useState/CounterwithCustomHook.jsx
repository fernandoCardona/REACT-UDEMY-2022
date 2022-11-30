import { useState } from "react";
import { useCounter } from "../hooks/useCounter";

export const CounterwithCustomHook = () => {
    const [ state, setState ] = useState();
    const { 
        counter,
        handleIncrement,
        handleDecrement,
        handleReset 
    } = useCounter();


    return (
        <>
            <h1>Counter with Hook: { counter }</h1>
            <hr />

            <div className="counter">
                <button
                    className="button yellow"
                    onClick={ handleIncrement }
                >
                    +1
                </button>

                <button
                    className="button green"
                    onClick={ handleDecrement }
                >
                    -1
                </button>

                <button
                    className="button reset"
                    onClick={ handleReset }
                >
                    Reset
                </button>
            </div>
            
        </>
    )
}
