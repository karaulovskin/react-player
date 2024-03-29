import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/reduxStore';
import AppMain from "./App";
import * as serviceWorker from './serviceWorker';
import './index.css';

export const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <AppMain />,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    const state = store.getState();
    rerenderEntireTree(state)
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

