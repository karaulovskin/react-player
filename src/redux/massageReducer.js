const ADD_MASSAGE = 'ADD-MASSAGE';
const UPDATE_NEW_POST_MASSAGE = 'UPDATE-NEW-POST-MASSAGE';

let initialState = {
    massage: [
        {massage: 'Massages 1'},
        {massage: 'Massages 2'},
        {massage: 'Massages 3'}
    ],
    newPostMassage: ''
}

const massageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MASSAGE:
            const newMassage = {
                massage: state.newPostMassage
            }
            state.massage.push(newMassage);
            state.newPostMassage = '';
            return state;
        case UPDATE_NEW_POST_MASSAGE:
            state.newPostMassage = action.newMassage;
            return state;
        default:
            return state;
    }
}

export const addMassageActionCreator = () => (
    { type: ADD_MASSAGE }
);
export const onMassageChangeActionCreator = (massage) => (
    { type: UPDATE_NEW_POST_MASSAGE, newMassage: massage }
);

export default massageReducer;