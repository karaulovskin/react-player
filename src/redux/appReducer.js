import {getAuthData} from "./authReducer";

const SET_INITIALIZED_SUCCESS = 'app/SET_INITIALIZED_SUCCESS';

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({ type: SET_INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthData());
    promise.then(() => {
        dispatch(initializedSuccess());
    })
}

export default appReducer;