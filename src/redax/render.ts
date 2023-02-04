import { RootStateType } from "./state";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import state from './redax/state';
import 'normalize.css';
import { addPost } from './redax/state';


export function rerenderEntireTree(value: RootStateType){
   
}