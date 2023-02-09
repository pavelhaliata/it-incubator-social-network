
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import store, { RootStoreType } from './redax/state';
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
					postsData={store._state.postsData}
					newPostTextData={store._state.newPostTextData}
					addNewPost={store.addNewPost.bind(store)}
					updateNewPostText={store.updateNewPostText.bind(store)}
				/>
			</React.StrictMode>
		</BrowserRouter>
	);
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);



