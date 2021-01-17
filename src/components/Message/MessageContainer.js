import React from 'react';
import { connect } from 'react-redux';
import { addMessageAC, messageChangeAC } from "../../redux/messageReducer";
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
            dispatch(addMessageAC());
        },
        messageChange: (message) => {
            const action = messageChangeAC(message);
            dispatch(action);
        },
    }
}


const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);

export default MessageContainer;