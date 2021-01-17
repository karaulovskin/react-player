import React from 'react';
import { connect } from 'react-redux';
import { followUsersAС, unfollowUsersAС, setUsersAС } from '../../redux/usersReducer';
import Users from './Users';

const mapStateToProps = (state) => {
    return {
        users: state.pageUsers.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (usersId) => {
            dispatch(followUsersAС(usersId))
        },
        unfollow: (usersId) => {
            dispatch(unfollowUsersAС(usersId))
        },
        setUsers: (users) => {
            dispatch(setUsersAС(users))
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;