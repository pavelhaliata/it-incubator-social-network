
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import state from './redax/state';
import 'normalize.css';
import './index.css';
import App from './App';
import { addNewPost, RootStateType, updateNewPostText, subscribe } from './redax/state';



const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

let rerenderEntireTree = (state: RootStateType) => {
	root.render(
		<BrowserRouter>
			<React.StrictMode>
				<App
					messageData={state.messagesData}
					personData={state.personsData}
					postsData={state.postsData}
					newPostTextData={state.newPostTextData}
					addNewPost={addNewPost}
					updateNewPostText={updateNewPostText}
				/>
			</React.StrictMode>
		</BrowserRouter>
	);
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree);



