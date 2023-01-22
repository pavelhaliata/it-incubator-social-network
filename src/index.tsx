import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MessageDataPropsType } from './pages/Profilepage/Dialogs/Dialogs';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// let [messageData, setMessageData] = useState<Array<MessageDataPropsType>>(
//   [
//   {
//     avatar: 'https://html.crumina.net/html-olympus/img/author-main1.webp',
//     name: 'James Spiegel',
//     message: 'Hi ! What are you doing? Are you sliping now? :)',
//     time: '22:00',
//   },
//   {
//     avatar: 'https://html.crumina.net/html-olympus/img/author-main1.webp',
//     name: 'James Spiegel',
//     message: 'Hi ! What are you doing? Are you sliping now? :)',
//     time: '22:00',
//   },
//   ]
  
// )

root.render(
  
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
