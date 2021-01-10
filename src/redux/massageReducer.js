const ADD_MASSAGE = 'ADD-MASSAGE';
const UPDATE_NEW_POST_MASSAGE = 'UPDATE-NEW-POST-MASSAGE';

const massageReducer = (state, action) => {
    if (action.type === ADD_MASSAGE) {
        const newMassage = {
            massage: state.newPostMassage
        }
        state.massage.push(newMassage);
        state.newPostMassage = '';
    } else if (action.type === UPDATE_NEW_POST_MASSAGE) {
        state.newPostMassage = action.newMassage;
    }

    return state;
}

export const addMassageActionCreator = () => (
    { type: ADD_MASSAGE }
);
export const onMassageChangeActionCreator = (massage) => (
    { type: UPDATE_NEW_POST_MASSAGE, newMassage: massage }
);

export default massageReducer;