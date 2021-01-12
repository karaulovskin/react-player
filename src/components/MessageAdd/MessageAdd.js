import React from 'react';
import s from './MessageAdd.module.css';

const MessageAdd = (props) => {

    const onAddMessage = () => {
        props.addMessage();
    }

    const onMessageChange = (e) => {
        const message = e.target.value;
        props.messageChange(message);
    }

    return (
        <div className={s.root}>
            <textarea
                onChange={ onMessageChange }
                value={ props.newPostMessage }
            />
            <button onClick={ onAddMessage }>add</button>
        </div>
    )
}

export default MessageAdd;