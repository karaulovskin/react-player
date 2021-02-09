import {applyMiddleware, combineReducers, createStore} from "redux";
import { reducer as formReducer } from "redux-form";
import thunkMiddleware from "redux-thunk";
import messageReducer from "./messageReducer";
import usersReducer from "./usersReducer";
import profileReducer from "./profileReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
    pageMessage: messageReducer,
    pageUsers: usersReducer,
    pageProfile: profileReducer,
    auth: authReducer,
    form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;