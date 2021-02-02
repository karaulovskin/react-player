import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getUserProfile} from "../../redux/profileReducer";
import Profile from "../../components/Profile/Profile";

class PageProfile extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }

        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <>
                <Profile {...this.props} profile={this.props.profile} />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.pageProfile.profile
})

const WithUrlDataContainerComponent = withRouter(PageProfile);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);