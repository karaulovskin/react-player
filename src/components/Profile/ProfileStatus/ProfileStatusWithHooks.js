import React, {useState} from "react";

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const onActivateEditMode = () => {
        setEditMode(true);
    }
    const onDeactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {   !editMode &&
                <div>
                    <span onDoubleClick={ onActivateEditMode }>{ props.status || 'status' }</span>
                </div>
            }
            {
                editMode &&
                <div>
                    <input
                        autoFocus={ true }
                        onBlur={ onDeactivateEditMode }
                        onChange={ onStatusChange }
                        value={ status }
                    />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;