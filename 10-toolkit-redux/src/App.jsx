import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import reactLogo from './assets/react.svg';
import { increment, decrement, incrementBy, reset } from './store/slices/counter'
import './App.css';

//1.0-Instalamos los paqutes de toolki y reduc con:
// npm install @reduxjs/toolkit react-redux

function App() {
   
    const { counter }= useSelector((state) => state.counter)
    const dispatch = useDispatch();

    const handleIncrement = (counter) => {
      dispatch( increment() );
    }
    const handleIncrementBy = (counter) => {
      dispatch( incrementBy(5) );
    }
    const handleDecrement = (counter) => {
      dispatch( decrement() );
    }
    const handleReset = (counter) => {
      dispatch( reset() );
    }

    return (
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>{ counter }</h1>
        <div className="card">
          
            <div style={{ display: 'flex', justifyContent: 'space-around', gap: 10 }}>
              <button onClick={ handleIncrement } style={{ minWidth:'100px', backgroundColor: 'green', border: '1px solid black'}}>
              +1 
            </button>
            <div style={{ display: 'flex', justifyContent: 'space-around', gap: 10 }}>
              <button onClick={ handleIncrementBy } style={{ minWidth:'100px', backgroundColor: 'coral', border: '1px solid black'}}>
              incrementByAmount  
            </button>
            <button onClick={ handleReset } style={{ minWidth:'100px', backgroundColor: 'red', border: '1px solid black'}}>
              Reset 
            </button>
            <button onClick={ handleDecrement } style={{ minWidth:'100px', backgroundColor: 'yellow', border: '1px solid black'}}>
              -1 
            </button>
          </div>
          
          
        </div>
        
        </div>
      </div>
    )
}

export default App
