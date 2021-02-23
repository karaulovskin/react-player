import messageReducer, {addMessage} from "./messageReducer";


it ('length of message should be incremented', () => {
    // 1. test data
    let state = {
        message: [
            {id: 1, message: 'Messages 1'},
            {id: 2, message: 'Messages 2'},
            {id: 3, message: 'Messages 3'}
        ],
    }
    let action = addMessage('react-player');

    // 2. action
    let newState = messageReducer(state, action);

    // 3. expectation
    expect(newState.message.length).toBe(4);
});