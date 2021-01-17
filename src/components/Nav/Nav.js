import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Nav.module.css';

const Nav = () => {
    return (
        <div className={s.root}>
            <ul>
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/stream">Stream</NavLink>
                </li>
                <li>
                    <NavLink to="/messages">Messages</NavLink>
                </li>
                <li>
                    <NavLink to="/users">Users</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Nav;