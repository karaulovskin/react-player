import {authAPI} from "../api/api";

const SET_AUTH_DATA = 'SET_AUTH_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthData = (userId, email, login) => (
    {type: SET_AUTH_DATA, data: {userId: userId, email: email, login: login}}
);

export const getAuthData = () => (dispatch) => {
    authAPI.me()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthData(id, email, login));
            }
        });
}

export default authReducer;