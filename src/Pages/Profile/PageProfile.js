import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {setUsersProfile} from "../../redux/profileReducer";
import * as axios from 'axios';
import Profile from "../../components/Profile/Profile";

class PageProfile extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(respons => {
                this.props.setUsersProfile(respons.data);
            });
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

export default connect(mapStateToProps, {setUsersProfile})(WithUrlDataContainerComponent);