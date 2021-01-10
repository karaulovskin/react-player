import {combineReducers, createStore} from 'redux';
import massageReducer from './massageReducer';

let reducers = combineReducers({
    pageMessage: massageReducer
});

let store = createStore(reducers);

export default store;