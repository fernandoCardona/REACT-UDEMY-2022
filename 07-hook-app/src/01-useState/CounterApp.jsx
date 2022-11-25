import { useState } from "react"


export const CounterApp = () => {

    const [ state, setCounter ] = useState({
        value1:10,
        value2:20,
        value3:30
    });
    const { value1, value2, value3 } = state;

    const handleIncrement = (e) => {
        e.preventDefault();
        setCounter( {
                        ...state,
                        value1: value1 + 1
                    } 
        );
    }
    const handleDecrement = (e) => {
        e.preventDefault();
        setCounter( {
                        ...state,
                        value1: value1 - 1
                    } 
        );
    }
    const handleReset = (e) => {
        e.preventDefault();
        setCounter( {
                        value1:10,
                        value2:20,
                        value3:30
                    } 
        );
    }

    return (
        <>
            <h1>CounterApp1: { value1 }</h1>
            <h1>CounterApp2: { value2 }</h1>
            <h1>CounterApp3: { value3 }</h1>
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


