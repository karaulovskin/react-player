import React from 'react';
import User from "./User/User";

const MassagesUser = (props) => {

    const data = [
        {id: '1', name: 'MassagesUser 1'},
        {id: '2', name: 'MassagesUser 2'},
        {id: '3', name: 'MassagesUser 3'}
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

export default MassagesUser;