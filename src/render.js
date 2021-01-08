import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { addMassage, updateNewPostMassage } from './redux/state';
import * as serviceWorker from './serviceWorker';

export const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={ state } addMassage={ addMassage } updateNewPostMassage={ updateNewPostMassage }/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
