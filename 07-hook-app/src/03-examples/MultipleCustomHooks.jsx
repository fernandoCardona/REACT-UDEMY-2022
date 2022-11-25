import { useFetch, useCounter } from "../hooks";
import { LoadingQoute, QouteBlock } from "./";




export const MultipleCustomHooks = () => {

    const { counter, handleIncrement, handleDecrement } = useCounter(1);

    const url_endPoint = `https://www.breakingbadapi.com/api/quotes/${counter}`;
    const {data, isLoading, hasError} = useFetch( url_endPoint );

    //console.log( {data, isLoading, hasError} );

    const { author, quote } = !!data && data[0];

  return ( 
    <div>
        <h1>MultipleCustomHooks</h1>
        <hr />
        {
            ( isLoading ) 
                ? <LoadingQoute /> 
                : <QouteBlock author={ author } quote={ quote }/>      
        }
        
        <div className="counter">
            <button 
                className="btn btn-primary"
                disabled={ ( counter <= 1 ) ? true : isLoading }
                onClick={ handleDecrement }
            >
                Before quote
            </button>
            <button 
                className="btn btn-secondary"
                disabled={isLoading}
                onClick={ handleIncrement }
            >
                Next quote
            </button>
        </div>
        

    </div>
  )
}

