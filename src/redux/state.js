import {rerenderEntireTree} from "../render";

const state = {
    pageMessage: {
        massage: [
            {massage: 'Massages 1'},
            {massage: 'Massages 2'},
            {massage: 'Massages 3'}
        ],
        newPostMassage: ''
    }
}

window.state = state;

export let addMassage = () => {
    const newMassage = {
        massage: state.pageMessage.newPostMassage
    }

    state.pageMessage.massage.push(newMassage);
    state.pageMessage.newPostMassage = '';
    rerenderEntireTree(state)
}

export let updateNewPostMassage = (newMassage) => {
    state.pageMessage.newPostMassage = newMassage;
    rerenderEntireTree(state)
}

export default state;