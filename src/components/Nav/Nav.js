import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Nav.module.css';

const Nav = () => {
    return (
        <div className={s.root}>
            <ul>
                <li>
                    <NavLink to="/home">Главная</NavLink>
                </li>
                <li>
                    <NavLink to="/stream">Стрим</NavLink>
                </li>
                <li>
                    <NavLink to="/messages">Сообщения</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Nav;