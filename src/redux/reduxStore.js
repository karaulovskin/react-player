import { combineReducers, createStore } from 'redux';
import messageReducer from './messageReducer';
import usersReducer from './usersReducer';
import profileReducer from './profileReducer';
import authReducer from './authReducer';

let reducers = combineReducers({
    pageMessage: messageReducer,
    pageUsers: usersReducer,
    pageProfile: profileReducer,
    auth: authReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;