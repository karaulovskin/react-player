import React, {useState} from "react";
import Preloader from "../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import avatar from "../../images/user.png";
import s from "./Profile.module.scss"

const Profile = ({profile, status, updateUserStatus, isOwner, savePhoto}) => {

    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
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
            <div>
                {
                    isOwner && <input type="file" onChange={onMainPhotoSelected}/>
                }
            </div>
            {
                editMode
                    ? <ProfileDataForm profile={profile} />
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {setEditMode(true)}} />
            }
            <div className={s.row}>
                <b>Status: </b>
                <ProfileStatusWithHooks
                    status={status}
                    updateUserStatus={updateUserStatus}
                />
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {
                isOwner && <div><button onClick={goToEditMode}>edit</button></div>
            }
            <div className={s.name}>
                <b>Name: </b>
                {profile.fullName}
            </div>
            <div>
                <b>Contacts: </b>
                {
                    Object.keys(profile.contacts).map(key => {
                        return (
                            <Contact
                                key={key}
                                contactTitle={key}
                                contactValue={profile.contacts[key]}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contacts}>
            {contactTitle}
            {contactValue}
        </div>
    )
}

export default Profile;