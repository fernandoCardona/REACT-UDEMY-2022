import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { JournalApp } from './JournalApp';

import './styles.css'


//4.1-Hacemos el apunte a nuestro AppRouter desde nuestro componente de inicioJournalApp 
//4.2-Lo envolvemos con el BrowserRouter 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <JournalApp/>
      </BrowserRouter>
  </React.StrictMode>
)
