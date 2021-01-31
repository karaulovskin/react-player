import React from 'react';
import { connect } from 'react-redux';
import { userAPI } from "../../api/api";
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsLoading } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsLoading(true);
        userAPI.getUser(this.props.currentPage, this.props.pageCount)
            .then(response => {
                this.props.toggleIsLoading(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }
    onChangePage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsLoading(true);
        userAPI.getUser(pageNumber, this.props.pageCount)
            .then(response => {
                this.props.toggleIsLoading(false);
                this.props.setUsers(response.data.items);
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

const mapStateToProps = (state) => {
    return {
        users: state.pageUsers.users,
        pageCount: state.pageUsers.pageCount,
        currentPage: state.pageUsers.currentPage,
        totalUsersCount: state.pageUsers.totalUsersCount,
        isLoading: state.pageUsers.isLoading,
    }
}

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsLoading})(UsersContainer);