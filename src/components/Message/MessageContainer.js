import { connect } from 'react-redux';
import { addMessage, changeMessage } from "../../redux/messageReducer";
import Message from './Message';

const mapStateToProps = (state) => {
    return {
        message: state.pageMessage.message,
        newPostMessage: state.pageMessage.newPostMessage
    }
}

export default connect(mapStateToProps, {addMessage, changeMessage})(Message);