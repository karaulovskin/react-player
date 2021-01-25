import React from 'react';
import { connect } from 'react-redux';
import {setUsersProfile} from "../../redux/profileReducer";
import * as axios from 'axios';
import Profile from "../../components/Profile/Profile";

class PageProfile extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2/`)
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

export default connect(mapStateToProps, {setUsersProfile})(PageProfile);