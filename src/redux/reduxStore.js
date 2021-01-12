import { combineReducers, createStore } from 'redux';
import messageReducer from './messageReducer';

let reducers = combineReducers({
    pageMessage: messageReducer
});

let store = createStore(reducers);

export default store;