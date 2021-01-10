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
                <MassageAdd
                    newPostMassage={ props.state.pageMessage.newPostMassage }
                    dispatch={ props.dispatch }
                />
                <Massages massage={ props.state.pageMessage.massage }/>
            </div>
        </div>
    )
}

export default PageMessages;