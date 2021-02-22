import React from "react";
import Preloader from "../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import avatar from "../../images/user.png";
import s from "./Profile.module.scss"

const Profile = ({profile, status, updateUserStatus}) => {

    if (!profile) {
        return <Preloader />
    }

    return (
        <div className={s.root}>
            <div className={s.avatar}>
                <picture>
                    <img src={profile.photos.large != null
                        ? profile.photos.large
                        : avatar}
                         alt=""
                    />
                </picture>
            </div>
            <div className={s.name}>
                {profile.fullName}
            </div>
            <ProfileStatusWithHooks
                status={status}
                updateUserStatus={updateUserStatus}
            />
        </div>
    )
}

export default Profile;