import messageReducer from "./messageReducer";

const store = {
    _state: {
        pageMessage: {
            message: [
                {message: 'Messages 1'},
                {message: 'Messages 2'},
                {message: 'Messages 3'}
            ],
            newPostMessage: ''
        }
    },
    _callSabscriber() {
        console.log('state change');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSabscriber = observer;
    },
    dispatch(action) {
        this._state.pageMessage = messageReducer(this._state.pageMessage, action);
        this._callSabscriber(this._state)
    }
}

export default store;

window.state = store.state;