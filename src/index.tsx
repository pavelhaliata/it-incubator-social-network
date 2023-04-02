import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/redux-store';
import 'normalize.css';
import './index.css';
import App from './App';
import {StateDataType} from './redux/store';
import {Provider} from './StoreContext';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const rerenderEntireTree = (state: StateDataType) => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <Provider store={store}>
                    <App
                        dispatch={store.dispatch.bind(store)}
                        state={state}
                        store={store}
                    />
                </Provider>
            </React.StrictMode>
        </BrowserRouter>
    );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    rerenderEntireTree(store.getState())
});



