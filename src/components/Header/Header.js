import React from 'react';
import Nav from '../Nav/Nav';

import s from './Header.module.scss';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={s.root}>
            <div className="container">
                <div className={s.inner}>
                    <Nav />
                    <div className={s.auth}>
                        { props.isAuth
                            ? <div>{props.login } <button onClick={props.logout}>Logout</button></div>
                            : <NavLink to="/login">Login</NavLink>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;