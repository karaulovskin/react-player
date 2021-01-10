import React from 'react';
import s from './MassageAdd.module.css';
import {addMassageActionCreator, onMassageChangeActionCreator} from "../../redux/massageReducer";

const MassageAdd = (props) => {
    const addMassage = () => {
        props.dispatch(addMassageActionCreator());
    }

    const onMassageChange = (e) => {
        const massage = e.target.value;
        const action = onMassageChangeActionCreator(massage);
        props.dispatch(action);
    }

    return (
        <div className={s.root}>
            <textarea
                onChange={ onMassageChange }
                value={ props.newPostMassage }
            />
            <button onClick={ addMassage }>add</button>
        </div>
    )
}

export default MassageAdd;