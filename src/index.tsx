
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import store, {StateDataType} from './redax/state';
import 'normalize.css';
import './index.css';
import App from './App';




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

store.subscribe(rerenderEntireTree);



