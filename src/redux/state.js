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

    _addMassage() {
        const newMassage = {
            massage: this._state.pageMessage.newPostMassage
        }

        this._state.pageMessage.massage.push(newMassage);
        this._state.pageMessage.newPostMassage = '';
        this._callSabscriber(this._state)
    },
    _updateNewPostMassage(newMassage) {
        this._state.pageMessage.newPostMassage = newMassage;
        this._callSabscriber(this._state)
    },

    dispatch(action) {
        if (action.type === 'ADD-MASSAGE') {
            this._addMassage();
        } else if (action.type === 'UPDATE-NEW-POST-MASSAGE') {
            this._updateNewPostMassage(action.newMassage);
        }
    }
}

export default store;

window.state = store.state;