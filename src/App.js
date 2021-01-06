import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Stream from './Pages/Stream/Stream';
import Header from './components/Header/Header';
import Player from './components/Player/Player';

import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <div>
                    <Route path='/home' component={Home} />
                    <Route path='/stream' component={Stream} />
                </div>
                <Player />
            </div>
        </BrowserRouter>
    );
}

export default App;
