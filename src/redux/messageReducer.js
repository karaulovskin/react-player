const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_POST_MESSAGE = 'UPDATE_NEW_POST_MESSAGE';

let initialState = {
    message: [
        {id: 1, message: 'Messages 1'},
        {id: 2, message: 'Messages 2'},
        {id: 3, message: 'Messages 3'}
    ],
    newPostMessage: ''
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_MESSAGE:
            return {
                ...state,
                newPostMessage: action.newMessage
            }
        case ADD_MESSAGE:
            const newMessage = {
                id: 4,
                message: state.newPostMessage
            }
            return {
                ...state,
                message: [...state.message, newMessage],
                newPostMessage: ''
            }
        default:
            return state;
    }
}

export const addMessage = () => (
    { type: ADD_MESSAGE }
);
export const changeMessage = (message) => (
    { type: UPDATE_NEW_POST_MESSAGE, newMessage: message }
);

export default messageReducer;