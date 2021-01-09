import React from 'react';
import s from './MassageAdd.module.css';

const MassageAdd = (props) => {

    const newMassageElement = React.createRef();

    const addMassage = () => {
        const action = {type: 'ADD-MASSAGE'};
        props.dispatch(action);
    }

    const onMassageChange = () => {
        const massage = newMassageElement.current.value;
        const action = {
            type: 'UPDATE-NEW-POST-MASSAGE',
            newMassage: massage
        };
        props.dispatch(action);
    }

    return (
        <div className={s.root}>
            <textarea
                ref={ newMassageElement }
                onChange={ onMassageChange }
                value={ props.newPostMassage }
            />
            <button onClick={ addMassage }>add</button>
        </div>
    )
}

export default MassageAdd;