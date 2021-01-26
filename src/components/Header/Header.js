import React from 'react';
import Nav from '../Nav/Nav';

import s from './Header.module.scss';

const Header = () => {
    return (
        <div className={s.root}>
            <div className="container">
                <Nav />
            </div>
        </div>
    )
};

export default Header;