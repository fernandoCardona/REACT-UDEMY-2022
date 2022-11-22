import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './components/CounterApp';
import { HelloWorldApp } from './HelloWorldApp';


import './index.css';
const value = 0

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* <HelloWorldApp /> */}
        <CounterApp value={ value }/>
    </React.StrictMode>
);