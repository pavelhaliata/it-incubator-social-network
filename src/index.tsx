import './index.css';
import state from './redax/state';
import 'normalize.css';
import { rerenderEntireTree } from './render';



rerenderEntireTree(state)