import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const messageData = [
  {
    avatar: 'https://html.crumina.net/html-olympus/img/author-main1.webp',
    name: 'James Spiegel',
    message: 'Hi ! What are you doing? Are you sliping now? :) ',
    time: '22:00',
  },
  {
    avatar: 'https://html.crumina.net/html-olympus/img/avatar1.webp',
    name: 'Nicholas Grissom',
    message: 'Hi! Bro)',
    time: '22:00',
  }
]

const personData = [
  {
    backgroudImg: 'https://html.crumina.net/html-olympus/img/friend1.webp',
    avatar: 'https://html.crumina.net/html-olympus/img/avatar1.webp',
    name: 'Nicholas Grissom',
    country: 'San Francisco, CA',
  },
  {
    backgroudImg: 'https://html.crumina.net/html-olympus/img/friend2.webp',
    avatar: 'https://html.crumina.net/html-olympus/img/avatar2.webp',
    name: 'Marina Valentine',
    country: 'Long Island, NY',
  },
  {
    backgroudImg: 'https://html.crumina.net/html-olympus/img/friend3.webp',
    avatar: 'https://html.crumina.net/html-olympus/img/avatar3.webp',
    name: 'Nicholas Grissom',
    country: 'Los Angeles, CA',
  },
  {
    backgroudImg: 'https://html.crumina.net/html-olympus/img/friend4.webp',
    avatar: 'https://html.crumina.net/html-olympus/img/avatar4.webp',
    name: 'Chris Greyson',
    country: 'Austin, TX',
  },
]

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App messageData={messageData} personData={personData}/>
    </React.StrictMode>
  </BrowserRouter>
);


reportWebVitals();
