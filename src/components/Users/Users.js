import React  from 'react';
import avatar from "../../images/user.png";
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageCount);
    const pages = [];

    for (let i=1; i <= pagesCount; i++ ) {
        pages.push(i);
    }

    console.log(props)

    return (
        <div className={s.root}>
            <div className={s.list}>
                { props.users.map( (user) => {
                    return (
                        <div className={s.item} key={user.id}>
                            <div>
                                <NavLink to={'/profile/' + user.id}>
                                    <img
                                        src={
                                            user.photos.small != null
                                                ? user.photos.small
                                                : avatar
                                        }
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
                                        ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                            props.toggleFollowingProgress(true, user.id);
                                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{
                                                withCredentials: true,
                                                headers: {
                                                    'API-KEY': '6171875f-9529-41c8-9e0f-66680e8c72a6',
                                                }
                                            })
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.unfollow(user.id)
                                                    }
                                                    props.toggleFollowingProgress(false, user.id);
                                                });

                                        }}>unfollow</button>
                                        : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                            props.toggleFollowingProgress(true, user.id);
                                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{},{
                                                withCredentials: true,
                                                headers: {
                                                    'API-KEY': '6171875f-9529-41c8-9e0f-66680e8c72a6',
                                                }
                                            })
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.follow(user.id)
                                                    }
                                                    props.toggleFollowingProgress(false, user.id);
                                                });

                                        }}>follow</button>
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
                            key={page}
                            className={props.currentPage === page && s.activePage}
                            onClick={ () => {
                                props.onChangePage(page);
                            }}
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