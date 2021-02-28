import React from 'react';
import {compose} from "redux";
import store from "./redux/reduxStore";
import {connect, Provider} from "react-redux";
import {HashRouter, Route, withRouter} from 'react-router-dom';
import {initializeApp} from "./redux/appReducer";
import PageHome from './Pages/Home/PageHome';
import PageStream from './Pages/Stream/PageStream';
import PageUser from './Pages/Users/PageUser';
import PageProfile from './Pages/Profile/PageProfile';
import PageLogin from './Pages/Login/PageLogin';
import HeaderContainer from './components/Header/HeaderContainer';
import Player from './components/Player/Player';
import Preloader from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";
import './App.css';

const PageMessages = React.lazy(() => import("./Pages/Messages/PageMessages"));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            <div className="App">
                <HeaderContainer/>
                <div className="container">
                    <Route path='/home' component={PageHome}/>
                    <Route path='/stream' component={PageStream}/>
                    <Route path='/messages' render={withSuspense(PageMessages)} />
                    <Route path='/users' component={PageUser}/>
                    <Route path='/profile/:userId?' component={PageProfile}/>
                    <Route path='/login/' component={PageLogin}/>
                </div>
                <Player/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

const AppMain = (props) => {
    return (
        <HashRouter>
            <Provider store={ store }>
                <AppContainer />
            </Provider>,
        </HashRouter>
    )
}

export default AppMain;