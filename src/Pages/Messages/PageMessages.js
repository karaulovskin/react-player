import React from 'react';
import Massages from "../../components/Massages/Massages";
import MassagesUser from "../../components/MassagesUser/MassagesUser";

const PageMessages = (props) => {
    return (
        <div>
            <div>
                <MassagesUser />
            </div>
            <div>
                <Massages massage={props.massage}/>
            </div>
        </div>
    )
}

export default PageMessages;