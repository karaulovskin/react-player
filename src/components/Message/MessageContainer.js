import { connect } from 'react-redux';
import { addMessage, changeMessage } from "../../redux/messageReducer";
import Message from './Message';
import React from "react";

const mapStateToProps = (state) => {

    return {
        message: state.pageMessage.message,
        newPostMessage: state.pageMessage.newPostMessage,
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {addMessage, changeMessage})(Message);