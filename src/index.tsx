
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import store from './redax/state';
import 'normalize.css';
import './index.css';
import App from './App';




const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const rerenderEntireTree = (value: any) => {
	root.render(
		<BrowserRouter>
			<React.StrictMode>
				<App
					messageData={store._state.messagesData}
					personData={store._state.personsData}
					postsData={store._state.blogPage.postsData}
					newPostTextData={store._state.blogPage.newPostTextData}
					dispatch={store.dispatch.bind(store)}
					store={store.getState()}
				/>
			</React.StrictMode>
		</BrowserRouter>
	);
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);



