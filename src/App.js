import React from 'react';
import { Route } from 'react-router-dom';
import PageHome from './Pages/Home/PageHome';
import PageStream from './Pages/Stream/PageStream';
import PageMessages from './Pages/Messages/PageMessages';
import PageUser from './Pages/Users/PageUser';
import Header from './components/Header/Header';
import Player from './components/Player/Player';

import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <div className="container">
                <Route path='/home' component={ PageHome } />
                <Route path='/stream' component={ PageStream } />
                <Route path='/messages' component={ PageMessages } />
                <Route path='/users' component={ PageUser } />
            </div>
            <Player />
        </div>
    );
}

export default App;
