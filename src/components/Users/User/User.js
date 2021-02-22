import React  from 'react';
import avatar from "../../../images/user.png";
import {NavLink} from "react-router-dom";
import s from "./User.module.scss";

const User = ({user, ...props}) => {
    return (
        <div className={s.root}>
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
}

export default User;