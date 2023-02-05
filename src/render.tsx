
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { addPost, RootStateType } from './redax/state';


export function rerenderEntireTree(value: RootStateType){
  
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
      );
      
      
    root.render(
        <BrowserRouter>
        <React.StrictMode>
          <App
            messageData={value.messagesData}
            personData={value.personsData}
            postsData={value.postsData}
            newPostData={value.newPostData}
            addPost={addPost}
          />
        </React.StrictMode>
      </BrowserRouter>
      );
}