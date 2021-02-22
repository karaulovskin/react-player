import React  from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";
import s from "./Users.module.scss";

const Users = (props) => {
    return (
        <div className={s.root}>
            <div className={s.list}>
                { props.users.map( user => <User
                        user={user}
                        key={user.id}
                        followingInProgress={props.followingInProgress}
                        unfollow={props.unfollow}
                        follow={props.follow}
                    />
                )}
            </div>

            <Paginator
                onChangePage={props.onChangePage}
                currentPage={props.currentPage}
                totalUsersCount={props.totalUsersCount}
                pageCount={props.pageCount}
            />
        </div>
    )
}

export default Users;