import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { JournalApp } from './JournalApp';
import { store } from './store';

import './styles.css'


//4.1-Hacemos el apunte a nuestro AppRouter desde nuestro componente de inicioJournalApp 
//4.2-Lo envolvemos con el BrowserRouter 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
          <JournalApp/>
      </BrowserRouter>
    </Provider>  
  </React.StrictMode>
)
