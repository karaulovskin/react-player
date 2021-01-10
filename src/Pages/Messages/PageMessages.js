import React from 'react';
import MassagesUser from "../../components/MassagesUser/MassagesUser";
import MassageAdd from "../../components/MassageAdd/MassageAdd";
import Massages from "../../components/Massages/Massages";

const PageMessages = (props) => {
    return (
        <div className="grid">
            <div className="grid-col grid-col--6">
                <MassagesUser />
            </div>
            <div className="grid-col grid-col--6">
                <Massages massage={ props.state.pageMessage.massage }/>
                <MassageAdd
                    newPostMassage={ props.state.pageMessage.newPostMassage }
                    dispatch={ props.dispatch }
                />
            </div>
        </div>
    )
}

export default PageMessages;