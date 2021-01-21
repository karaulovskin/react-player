import React, { Component } from 'react';
import * as axios from 'axios';
import avatar from '../../images/user.png';
import s from './Users.module.css';

class Users extends React.Component {

    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(respons => {
                this.props.setUsers(respons.data.items);
            });
    }

    render() {
        return (
            <div className={s.root}>
                {
                    this.props.users.map( (user) =>
                        <div className={s.item} key={user.id}>
                            <div>
                                <img
                                    src={
                                        user.photos.small != null
                                        ? user.photos.small
                                        : avatar
                                    }
                                    alt=""
                                />
                            </div>
                            <div>
                                {user.name}
                            </div>
                            <div>
                                {
                                    user.followed
                                        ? <button onClick={() => {
                                            this.props.unfollow(user.id)
                                        }}>unfollow</button>
                                        : <button onClick={() => {
                                            this.props.follow(user.id)
                                        }}>follow</button>
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Users;