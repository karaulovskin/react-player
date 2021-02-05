import React from 'react';
import s from './Message.module.css';
import {Redirect} from "react-router-dom";

const Message = (props) => {
    const messages = props.message
        .map( message => <li key={ message.id }>{ message.message }</li> );

    const onAddMessage = () => {
        props.addMessage();
    }

    const onChangeMessage = (e) => {
        const message = e.target.value;
        props.changeMessage(message);
    }

    if (!props.isAuth) return <Redirect to={'/login'} />;

    return (
        <div className={s.root}>
            <div>
                <ul>
                    { messages }
                </ul>
            </div>
            <textarea
                onChange={ onChangeMessage }
                value={ props.newPostMessage }
            />
            <button onClick={ onAddMessage }>add</button>
        </div>
    )
}

export default Message;