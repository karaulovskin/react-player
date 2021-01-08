import React from 'react';
import { Route } from 'react-router-dom';
import PageHome from './Pages/Home/PageHome';
import PageStream from './Pages/Stream/PageStream';
import PageMessages from './Pages/Messages/PageMessages';
import Header from './components/Header/Header';
import Player from './components/Player/Player';

import './App.css';

const App = (props) => {
    return (
        <div className="App">
            <Header />
            <div className="container">
                <Route path='/home' component={ PageHome } />
                <Route path='/stream' component={ PageStream } />
                <Route
                    path='/messages'
                    render={ () => <PageMessages
                    state={ props.state }
                    addMassage={ props.addMassage }
                    /> } />
            </div>
            <Player />
        </div>
    );
}

export default App;
