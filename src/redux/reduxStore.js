import { combineReducers, createStore } from 'redux';
import messageReducer from './messageReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers({
    pageMessage: messageReducer,
    pageUsers: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;