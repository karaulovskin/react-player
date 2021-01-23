import React from 'react';
import { connect } from 'react-redux';
import { followUsersAС, unfollowUsersAС, setUsersAС, setCurrentPageAС, setTotalUsersCountAС } from '../../redux/usersReducer';
import Users from './Users';

const mapStateToProps = (state) => {
    return {
        users: state.pageUsers.users,
        pageCount: state.pageUsers.pageCount,
        currentPage: state.pageUsers.currentPage,
        totalUsersCount: state.pageUsers.totalUsersCount,
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
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAС(currentPage))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAС(totalUsersCount))
        },
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;