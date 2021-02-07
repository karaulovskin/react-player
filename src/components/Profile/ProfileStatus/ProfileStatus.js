import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }

    onActivateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }

    onDeactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateUserStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.status !== prevProps.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.onActivateEditMode}>{this.props.status || 'status'}</span>
                    </div>
                }
                {
                    this.state.editMode &&
                    <div>
                        <input
                            autoFocus={true}
                            onBlur={this.onDeactivateEditMode}
                            onChange={this.onStatusChange}
                            value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;