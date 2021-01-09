import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import store from './redux/state';
import * as serviceWorker from './serviceWorker';

export const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={ state } addMassage={ store.addMassage.bind(store) } updateNewPostMassage={ store.updateNewPostMassage.bind(store) }/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

