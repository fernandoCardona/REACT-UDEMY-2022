import React from 'react'

export const ShowIncrement = React.memo( ( { increment } ) => { 
    console.log('Me volvi a generar :(');

    const handleClick = () => { 
        increment();
    }
    return (
        
        <button 
            className="btn btn-primary"
            onClick={ handleClick }
        >
            Incrementar
        </button>
    )
});
