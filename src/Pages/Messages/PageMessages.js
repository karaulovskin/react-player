import React from 'react';
import Massages from "../../components/Massages/Massages";
import MassagesUser from "../../components/MassagesUser/MassagesUser";

const PageMessages = () => {
    return (
        <div>
            <div>
                <MassagesUser />
            </div>
            <div>
                <Massages />
            </div>
        </div>
    )
}

export default PageMessages;