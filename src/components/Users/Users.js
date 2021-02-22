import React  from 'react';
import avatar from "../../images/user.png";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import s from "./Users.module.scss";

const Users = ({ totalUsersCount, pageCount, currentPage, onChangePage, users,  ...props}) => {
    return (
        <div className={s.root}>
            <div className={s.list}>
                { users.map( (user) => {
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

            <Paginator
                onChangePage={onChangePage}
                currentPage={currentPage}
                totalUsersCount={totalUsersCount}
                pageCount={pageCount}
            />
        </div>
    )
}

export default Users;