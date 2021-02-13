const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {
    message: [
        {id: 1, message: 'Messages 1'},
        {id: 2, message: 'Messages 2'},
        {id: 3, message: 'Messages 3'}
    ],
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 4,
                message: action.newPostMessage
            }
            return {
                ...state,
                message: [...state.message, newMessage],
            }
        default:
            return state;
    }
}

export const addMessage = (newPostMessage) => (
    { type: ADD_MESSAGE, newPostMessage }
);

export default messageReducer;