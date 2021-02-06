import React  from 'react';
import avatar from "../../images/user.png";
import s from "./Users.module.css";
import {NavLink, Redirect} from "react-router-dom";

const Users = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageCount);
    const pages = [];

    for (let i=1; i <= pagesCount; i++ ) {
        pages.push(i);
    }

    return (
        <div className={s.root}>
            <div className={s.list}>
                { props.users.map( (user) => {
                    return (
                        <div className={s.item} key={ user.id }>
                            <div>
                                <NavLink to={'/profile/' + user.id}>
                                    <img src={ user.photos.small != null
                                                ? user.photos.small
                                                : avatar }
                                        alt=""
                                    />
                                </NavLink>
                            </div>
                            <div>
                                {user.name}
                            </div>
                            <div>
                                {
                                    user.followed
                                        ? <button
                                            disabled={ props.followingInProgress.some(id => id === user.id) }
                                            onClick={() => { props.unfollow(user.id) }}>unfollow</button>
                                        : <button
                                            disabled={ props.followingInProgress.some(id => id === user.id) }
                                            onClick={() => { props.follow(user.id) }}>follow</button>
                                }
                            </div>
                        </div>
                    )
                }) }
            </div>

            <div className={s.pagination}>
                { pages.map( page => {
                    return (
                        <span
                            key={ page }
                            className={ props.currentPage === page && s.activePage }
                            onClick={ () => { props.onChangePage(page) }}
                        >
                            {page}
                        </span>
                    )
                }) }
            </div>
        </div>
    )
}

export default Users;