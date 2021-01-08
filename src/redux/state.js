const state = {
    pageMessage: {
        massage: [
            {massage: 'Massages 1'},
            {massage: 'Massages 2'},
            {massage: 'Massages 3'}
        ]
    }
}

export let addMassage = (postMassage) => {
    const newMassage = {
        massage: postMassage
    }

    state.pageMessage.massage.push(newMassage);
    console.log(state)
}

export default state;