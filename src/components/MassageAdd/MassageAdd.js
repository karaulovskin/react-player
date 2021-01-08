import React from 'react';
import s from './MassageAdd.module.css';

const MassageAdd = (props) => {

    const newMassageElement = React.createRef();

    const addMassage = () => {
        props.addMassage();
    }

    const onMassageChange = () => {
        const massage = newMassageElement.current.value;
        props.updateNewPostMassage(massage);
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