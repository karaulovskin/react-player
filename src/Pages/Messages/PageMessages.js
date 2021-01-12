import React from 'react';
import MessagesUser from "../../components/MessagesUser/MessagesUser";
import MessageAddContainer from "../../components/MessageAdd/MessageAddContainer";
import Messages from "../../components/Messages/Messages";

const PageMessages = (props) => {

    const state = props.store.getState();

    return (
        <div className="grid">
            <div className="grid-col grid-col--6">
                <MessagesUser />
            </div>
            <div className="grid-col grid-col--6">
                <Messages message={ state.pageMessage.message }/>
                <MessageAddContainer
                    store={ props.store }
                    state={ state }
                />
            </div>
        </div>
    )
}

export default PageMessages;