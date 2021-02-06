import React from "react";
import {connect} from "react-redux";
import {setCurrentPage, toggleFollowingProgress, getUsersThankCreator, followThankCreator, unfollowThankCreator} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageCount)
    }

    onChangePage = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageCount)
        this.props.setCurrentPage(pageNumber);
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
                    followingInProgress={this.props.followingInProgress}
                    isAuth={this.props.isAuth}
                />
            </>
        )
    }
}

const AuthRedirectComponent = withAuthRedirect(UsersContainer);

const mapStateToProps = (state) => {
    return {
        users: state.pageUsers.users,
        pageCount: state.pageUsers.pageCount,
        currentPage: state.pageUsers.currentPage,
        totalUsersCount: state.pageUsers.totalUsersCount,
        isLoading: state.pageUsers.isLoading,
        followingInProgress: state.pageUsers.followingInProgress,
    }
}

export default connect(mapStateToProps, {
    follow: followThankCreator,
    unfollow: unfollowThankCreator,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers: getUsersThankCreator
})(AuthRedirectComponent);