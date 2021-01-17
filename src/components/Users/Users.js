import React from 'react';
import * as axios from 'axios';
import avatar from '../../images/user.png';
import s from './Users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(respons => {
            props.setUsers(respons.data.items);
        });
    }

    return (
        <div className={s.root}>
            {
                props.users.map((user) =>
                    <div key={ user.id } className={s.item}>
                        <div>
                            <img
                                src={ user.photos.small != null
                                ? user.photos.small
                                : avatar } alt=""
                            />
                        </div>
                        <div>
                            { user.name }
                        </div>
                        <div>
                            {
                                user.followed
                                    ? <button onClick={ () => { props.unfollow(user.id) } } >unfollow</button>
                                    : <button onClick={ () => { props.follow(user.id) } } >follow</button>
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Users;