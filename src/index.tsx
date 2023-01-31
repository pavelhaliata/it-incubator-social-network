import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redax/state'



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App messageData={state.messageData} personData={state.personData}/>
    </React.StrictMode>
  </BrowserRouter>
);


reportWebVitals();
