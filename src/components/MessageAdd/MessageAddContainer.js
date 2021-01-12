import React from 'react';
import { addMessageActionCreator, messageChangeActionCreator } from "../../redux/messageReducer";
import MessageAdd from "./MessageAdd";

const MessageAddContainer = (props) => {

    const newPostMessage = props.state.pageMessage.newPostMessage;

    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    const messageChange = (message) => {
        const action = messageChangeActionCreator(message);
        props.store.dispatch(action);
    }

    return (
        <MessageAdd
            addMessage={ addMessage }
            messageChange={ messageChange }
            newPostMessage={ newPostMessage }
        />
    )
}

export default MessageAddContainer;