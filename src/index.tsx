
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import store from './redax/redux-store';
import 'normalize.css';
import './index.css';
import App from './App';
import { StateDataType } from './redax/store';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const rerenderEntireTree = (state: any) => {
	root.render(
		<BrowserRouter>
			<React.StrictMode>
				<App
					dispatch={store.dispatch.bind(store)}
					state={state}
				/>
			</React.StrictMode>
		</BrowserRouter>
	);
}

rerenderEntireTree(store.getState());

store.subscribe(()=>{
	const state = store.getState()
	rerenderEntireTree(state)
});



