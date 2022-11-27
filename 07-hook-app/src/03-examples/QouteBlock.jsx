import { useLayoutEffect, useRef, useState } from "react";


export const QouteBlock = ( { author, quote } ) => {
    
    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ 
        width: 0,
        height: 0
    });

    useLayoutEffect(() => {
        const { width, height } = pRef.current.getBoundingClientRect();
        setBoxSize({ 
            width,
            height
        })
        console.log( pRef.current.getBoundingClientRect() )
    }, [quote]);

    const { width, height } = boxSize;
    
    return (
        <>
          <blockquote 
            className="blockquote text-end"
            style={ { display: 'flex'} }
        >
            <p 
                ref={ pRef }
                className="mb-4"
            > { quote }</p>
            <footer className="blockquote-footer">{ author }</footer>
        </blockquote>
        <p> width: { width } heigth: { height }</p>  
        </>
        
    )
}


