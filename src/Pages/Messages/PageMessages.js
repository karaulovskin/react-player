import React from 'react';
import MessagesUser from "../../components/MessagesUser/MessagesUser";
import MessageContainer from "../../components/Message/MessageContainer";

const PageMessages = () => {
    return (
        <div className="grid">
            <div className="grid-col grid-col--6">
                <MessagesUser />
            </div>
            <div className="grid-col grid-col--6">
                <MessageContainer />
            </div>
        </div>
    )
}

export default PageMessages;