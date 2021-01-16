const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_POST_MESSAGE = 'UPDATE_NEW_POST_MESSAGE';

let initialState = {
    message: [
        {message: 'Messages 1'},
        {message: 'Messages 2'},
        {message: 'Messages 3'}
    ],
    newPostMessage: ''
}

const messageReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                message: state.newPostMessage
            }
            stateCopy.message.push(newMessage);
            stateCopy.newPostMessage = '';
            return stateCopy;
        case UPDATE_NEW_POST_MESSAGE:
            stateCopy.newPostMessage = action.newMessage;
            return stateCopy;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => (
    { type: ADD_MESSAGE }
);
export const messageChangeActionCreator = (message) => (
    { type: UPDATE_NEW_POST_MESSAGE, newMessage: message }
);

export default messageReducer;