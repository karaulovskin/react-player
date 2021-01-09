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
    getState() {
        return this._state;
    },
    _callSabscriber() {
        console.log('state change');
    },
    addMassage() {
        const newMassage = {
            massage: this._state.pageMessage.newPostMassage
        }

        this._state.pageMessage.massage.push(newMassage);
        this._state.pageMessage.newPostMassage = '';
        this._callSabscriber(this._state)
    },
    updateNewPostMassage(newMassage) {
        this._state.pageMessage.newPostMassage = newMassage;
        this._callSabscriber(this._state)
    },
    subscribe(observer) {
        this._callSabscriber = observer;
    },
}

export default store;

window.state = store.state;