import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsLoading } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";

const mapStateToProps = (state) => {
    return {
        users: state.pageUsers.users,
        pageCount: state.pageUsers.pageCount,
        currentPage: state.pageUsers.currentPage,
        totalUsersCount: state.pageUsers.totalUsersCount,
        isLoading: state.pageUsers.isLoading,
    }
}

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageCount}`)
            .then(respons => {
                this.props.toggleIsLoading(false);
                this.props.setUsers(respons.data.items);
                this.props.setTotalUsersCount(respons.data.totalCount);
            });
    }
    onChangePage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageCount}`)
            .then(respons => {
                this.props.toggleIsLoading(false);
                this.props.setUsers(respons.data.items);
            });
    }

    render() {
        return (
            <>
                {this.props.isLoading ? <Preloader /> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageCount={this.props.pageCount}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    currentPage={this.props.currentPage}
                    onChangePage={this.onChangePage}
                />
            </>
        )
    }
}

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsLoading})(UsersContainer);