import React from "react";
import Preloader from "../common/Preloader/Preloader";
import avatar from "../../images/user.png";
import s from "./Profile.module.scss"

const Profile = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={s.root}>
            <div className={s.avatar}>
                <picture>
                    <img src={props.profile.photos.large != null
                        ? props.profile.photos.large
                        : avatar}
                         alt=""
                    />
                </picture>
            </div>
            <div className={s.name}>
                {props.profile.fullName}
            </div>
        </div>
    )
}

export default Profile;