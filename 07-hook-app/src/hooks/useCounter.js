import { useState } from "react"



export const useCounter = (initialValue = 0) => {

    const [ counter, setCounter] = useState( initialValue );
    const incrementValue = 1;
    const decrementValue = 1;

    const handleIncrement = () => {
        setCounter( counter + incrementValue);
    }
    const handleDecrement = () => {
        if( counter === 0) return;
        setCounter( counter - decrementValue);
    }
    const handleReset = () => {
        setCounter( initialValue );
    }

    return {
        counter,
        handleIncrement,
        handleDecrement,
        handleReset
        
    }
}

 
