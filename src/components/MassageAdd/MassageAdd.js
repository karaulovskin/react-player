import React from 'react';
import s from './MassageAdd.module.css';

const MassageAdd = () => {

    const newMassageElement = React.createRef();

    const addMassage = () => {
        const massage = newMassageElement.current.value;
        alert(massage);
    }

    return (
        <div className={s.root}>
            <textarea ref={ newMassageElement }></textarea>
            <button onClick={ addMassage }>add</button>
        </div>
    )
}

export default MassageAdd;