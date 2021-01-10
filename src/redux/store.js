import massageReducer from "./massageReducer";

const store = {
    _state: {
        pageMessage: {
            massage: [
                {massage: 'Massages 1'},
                {massage: 'Massages 2'},
                {massage: 'Massages 3'}
            ],
            newPostMassage: ''
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
        this._state.pageMessage = massageReducer(this._state.pageMessage, action);
        this._callSabscriber(this._state)
    }
}

export default store;

window.state = store.state;