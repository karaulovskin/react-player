import React from 'react';

const Messages = (props) => {

    const messages = props.message
        .map( message => <li>{ message.message }</li> );

    return (
        <div>
            <ul>
                { messages }
            </ul>
        </div>
    )
}

export default Messages;
