import React from 'react';
import MessagesUser from "../../components/MessagesUser/MessagesUser";
import MessageAddContainer from "../../components/MessageAdd/MessageAddContainer";

const PageMessages = () => {
    return (
        <div className="grid">
            <div className="grid-col grid-col--6">
                <MessagesUser />
            </div>
            <div className="grid-col grid-col--6">
                <MessageAddContainer />
            </div>
        </div>
    )
}

export default PageMessages;