
import { useState } from 'react';
import PropTypes from 'prop-types';




export const CounterApp = ( { value } ) => {

    const [counter, setCounter] = useState(value);

    const handleIncrement = (e) => {
        e.preventDefault();
        setCounter( counter + 1);
    }
    const handleDecrement = (e) => {
        e.preventDefault();
        setCounter( counter - 1);
    }
    const handleReset = (e) => {
        e.preventDefault();
        setCounter( value );
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button 
                className="button"
                onClick={ handleIncrement }
            > + 1 </button>
            <button 
                className="button red"
                onClick={ handleDecrement }
            > - 1 </button>
            <button 
                className="button reset"
                onClick={ handleReset }
            > Reset </button>
        </>
    )
}
CounterApp.propTypes ={
    value: PropTypes.number.isRequired
}