import React from 'react';
import s from './MassageAdd.module.css';

const MassageAdd = (props) => {

    const newMassageElement = React.createRef();

    const addMassage = () => {
        const massage = newMassageElement.current.value;
        props.addMassage(massage);
    }

    return (
        <div className={s.root}>
            <textarea ref={ newMassageElement } />
            <button onClick={ addMassage }>add</button>
        </div>
    )
}

export default MassageAdd;