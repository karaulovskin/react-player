import React from 'react';
import s from './MassageAdd.module.css';
import {addMassageActionCreator, onMassageChangeActionCreator} from "../../redux/state";

const MassageAdd = (props) => {

    const newMassageElement = React.createRef();

    const addMassage = () => {
        props.dispatch(addMassageActionCreator());
    }

    const onMassageChange = () => {
        const massage = newMassageElement.current.value;
        const action = onMassageChangeActionCreator(massage);
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