import React from 'react';
import { addMessageActionCreator, messageChangeActionCreator } from "../../redux/messageReducer";
import MessageAdd from "./MessageAdd";
import StoreContext from "../../storeContext";

const MessageAddContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState();
                    const message = state.pageMessage.message ;
                    const newPostMessage = state.pageMessage.newPostMessage;

                    const addMessage = () => {
                        store.dispatch(addMessageActionCreator());
                    }

                    const messageChange = (message) => {
                        const action = messageChangeActionCreator(message);
                        store.dispatch(action);
                    }

                    return (
                        <MessageAdd
                            message={ message }
                            addMessage={ addMessage }
                            messageChange={ messageChange }
                            newPostMessage={ newPostMessage }
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default MessageAddContainer;