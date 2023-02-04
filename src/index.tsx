import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import state from './redax/state';
import 'normalize.css';
import { addPost } from './redax/state';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App
      messageData={state.messagesData}
      personData={state.personsData}
      postsData={state.postsData}
      addPost={addPost}
    />
  </React.StrictMode>
</BrowserRouter>
);
