import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
    const messages = props.message
        .map( message => <li>{ message.message }</li> );

    const onAddMessage = () => {
        props.addMessage();
    }

    const onMessageChange = (e) => {
        debugger;
        const message = e.target.value;
        props.messageChange(message);
    }

    return (
        <div className={s.root}>
            <div>
                <ul>
                    { messages }
                </ul>
            </div>
            <textarea
                onChange={ onMessageChange }
                value={ props.newPostMessage }
            />
            <button onClick={ onAddMessage }>add</button>
        </div>
    )
}

export default Message;