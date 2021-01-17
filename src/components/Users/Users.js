import React from 'react';
import s from './Users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    avatarUrl: '',
                    followed: true,
                    fullName: 'Name 1',
                    location: {
                        city: 'Moscow',
                        country: 'Russia'
                    }
                },
                {
                    id: 2,
                    avatarUrl: '',
                    followed: false,
                    fullName: 'Name 2',
                    location: {
                        city: 'Moscow',
                        country: 'Russia'
                    }
                },
            ],
        )
    }

    return (
        <div>
            {
                props.users.map((user) =>
                    <div key={ user.id } className={s.root}>
                        <div>
                            <img src={ user.avatarUrl } alt=""/>
                        </div>
                        <div>
                            { user.fullName }
                        </div>
                        <div>
                            { user.location.country }
                        </div>
                        <div>
                            { user.location.city }
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