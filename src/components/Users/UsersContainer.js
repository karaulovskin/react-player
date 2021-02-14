import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {setCurrentPage, toggleFollowingProgress, getUsersThankCreator, followThankCreator, unfollowThankCreator} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    gePageCount,
    getCurrentPage,
    getFollowingInProgress,
    getIsLoading,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

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

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageCount: gePageCount(state),
        currentPage: getCurrentPage(state),
        totalUsersCount: getTotalUsersCount(state),
        isLoading: getIsLoading(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    // withAuthRedirect,
    connect(mapStateToProps, {
        follow: followThankCreator,
        unfollow: unfollowThankCreator,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers: getUsersThankCreator
    })
)(UsersContainer)
