import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profileReducer";
import Profile from "../../components/Profile/Profile";

class PageProfile extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 14532;
        }

        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return (
            <>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateUserStatus={this.props.updateUserStatus}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.pageProfile.profile,
    status: state.pageProfile.status,
})

const WithUrlDataContainerComponent = withRouter(PageProfile);

export default connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus})(WithUrlDataContainerComponent);