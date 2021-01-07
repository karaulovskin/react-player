import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PageHome from './Pages/Home/PageHome';
import PageStream from './Pages/Stream/PageStream';
import PageMessages from './Pages/Messages/PageMessages';
import Header from './components/Header/Header';
import Player from './components/Player/Player';

import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <div>
                    <Route path='/home' component={PageHome} />
                    <Route path='/stream' component={PageStream} />
                    <Route path='/messages' component={PageMessages} />
                </div>
                <Player />
            </div>
        </BrowserRouter>
    );
}

export default App;
