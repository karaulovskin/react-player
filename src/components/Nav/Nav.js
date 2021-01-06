import React from 'react';

import s from './Nav.module.css';

const Nav = () => {
    return (
        <div className={s.root}>
            <ul>
                <li>
                    <a href="/home">Главная</a>
                </li>
                <li>
                    <a href="/stream">Стрим</a>
                </li>
            </ul>
        </div>
    )
}

export default Nav;