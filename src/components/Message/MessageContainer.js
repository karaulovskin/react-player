import React from "react";
import {connect} from "react-redux";
import {addMessage, changeMessage} from "../../redux/messageReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Message from "./Message";

const AuthRedirectComponent = withAuthRedirect(Message);

const mapStateToProps = (state) => {

    return {
        message: state.pageMessage.message,
        newPostMessage: state.pageMessage.newPostMessage,
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {addMessage, changeMessage})(AuthRedirectComponent);