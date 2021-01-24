import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
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

class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageCount}`)
            .then(respons => {
                this.props.setUsers(respons.data.items);
                this.props.setTotalUsersCount(respons.data.totalCount);
            });
    }

    onChangePage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageCount}`)
            .then(respons => {
                this.props.setUsers(respons.data.items);
            });
    }

    render() {
        return (
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageCount={this.props.pageCount}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                currentPage={this.props.currentPage}
                onChangePage={this.onChangePage}
            />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);