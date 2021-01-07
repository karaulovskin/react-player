import React from 'react';
import { NavLink } from 'react-router-dom';

const User = (props) => {
    let path = `/messages/${props.id}`;

    return (
        <NavLink
            to={path}
        >
            {props.name}
        </NavLink>
    )
}

export default User;