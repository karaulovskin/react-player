import React from 'react';
import User from "./User/User";

const MessagesUser = () => {

    const data = [
        {id: '1', name: 'MessagesUser 1'},
        {id: '2', name: 'MessagesUser 2'},
        {id: '3', name: 'MessagesUser 3'}
    ]

    const users = data
        .map( user => <li><User id={ user.id } name={ user.name }/></li> );

    return (
        <div>
            <ul>
                { users }
            </ul>
        </div>
    )
}

export default MessagesUser;