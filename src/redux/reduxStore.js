import { combineReducers, createStore } from 'redux';
import messageReducer from './messageReducer';
import usersReducer from './usersReducer';
import profileReducer from './profileReducer';

let reducers = combineReducers({
    pageMessage: messageReducer,
    pageUsers: usersReducer,
    pageProfile: profileReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;