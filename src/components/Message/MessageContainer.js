import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator, messageChangeActionCreator } from "../../redux/messageReducer";
import Message from './Message';

const mapStateToProps = (state) => {
    return {
        message: state.pageMessage.message,
        newPostMessage: state.pageMessage.newPostMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        messageChange: (message) => {
            const action = messageChangeActionCreator(message);
            dispatch(action);
        },
    }
}


const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);

export default MessageContainer;