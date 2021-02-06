import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {addMessage, changeMessage} from "../../redux/messageReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Message from "./Message";

const mapStateToProps = (state) => {

    return {
        message: state.pageMessage.message,
        newPostMessage: state.pageMessage.newPostMessage,
        isAuth: state.auth.isAuth,
    }
}

export default compose(
    connect(mapStateToProps, {addMessage, changeMessage}),
    withAuthRedirect
)(Message)